import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../utils/api';

//This runs ONCE when the file loads gets destroyed on every refresh or browser closing, persists on navigating between pages
const globalCache = {};

export default function useFetch(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!endpoint) {
            setLoading(false);
            return; //if no url is provided do not attempt to fetch data
        }

        // Case 1: Popular Movies - NO existing params
        // endpoint = "/movie/popular"
        // endpoint.includes('?')? → false → separator = '?'
        // url = "https://api.../movie/popular?api_key=123"

        // Case 2: Movie Details - HAS existing params
        // endpoint = "/movie/123?append_to_response=credits"
        // endpoint.includes('?')? → true → separator = '&'
        // url = "https://api.../movie/123?append_to_response=credits&api_key=123"

        const separator = endpoint.includes('?') ? '&' : '?';
        const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`;

        console.log('Fetching URL:', url); // Debug to verify

        let isMounted = true; //isMounted tracks if component is still on screen

        if (globalCache[url]) {
            setData(globalCache[url]);
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        
        (async function fetchData(){
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(url, { ...options, signal: controller.signal });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();

                if(isMounted){  //Only update state if component is STILL mounted
                    //save to cache with url as the key and value as the result object
                    globalCache[url] = result;
                    setData(result);
                }

            } catch (err) {
                if(err.name === 'AbortError'){
                    return; //exit if fetch was aborted
                }

                if(isMounted){ //Real error, only update if component is still mounted
                    setError(err.message);
                    setData(null);
                }

            } finally {
                if(isMounted) setLoading(false);
            }
        })();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [endpoint, JSON.stringify(options)]); // Options as dependency

    return { data, loading, error };
}