import { useState, useEffect, useRef } from 'react';

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cache = useRef({});

    useEffect(() => {
        if(!url) {
            setLoading(false);
            return; //if no url is provided do not attempt to fetch data
        }

        let isMounted = true; //isMounted tracks if component is still on screen

        if (cache.current[url]) {
            setData(cache.current[url]);
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
                    //save to cache
                    cache.current[url] = result;
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

    }, [url, JSON.stringify(options)]); // Options as dependency

    return { data, loading, error };
}