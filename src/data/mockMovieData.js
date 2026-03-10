// Mock movie data for testing
export const mockMovie = {
    id: 550,
    title: "Fight Club",
    backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    vote_average: 8.4,
    release_date: "1999-10-15",
    runtime: 139,
    genres: [
        { id: 18, name: "Drama" },
        { id: 53, name: "Thriller" }
    ],
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until a sensuous eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    credits: {
        cast: [
            { 
                id: 819, 
                name: "Edward Norton", 
                character: "The Narrator",
                profile_path: "/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg"
            },
            { 
                id: 287, 
                name: "Brad Pitt", 
                character: "Tyler Durden",
                profile_path: "/cckcYc2v0yh1tc9QjRelptcOBko.jpg"
            },
            { 
                id: 1283, 
                name: "Helena Bonham Carter", 
                character: "Marla Singer",
                profile_path: "/mWwRPEpsSpRseSlQzBCTikalc48.jpg"
            },
            { 
                id: 7470, 
                name: "Meat Loaf", 
                character: "Robert 'Bob' Paulson",
                profile_path: "/7O8JcaHrggiUc48N71SC6NimAFW.jpg"
            },
            { 
                id: 7499, 
                name: "Jared Leto", 
                character: "Angel Face",
                profile_path: "/caH4HZbiC9dC5cB8CahJmSrwZQ8.jpg"
            }
        ]
    },
    reviews: {
        results: [
            {
                id: 1,
                author: "Roger Ebert",
                content: "Fight Club is the most exciting American movie in years. It is also a brutal, dangerous, frighteningly effective movie that may well be harmful to some people.",
                created_at: "1999-10-15T00:00:00.000Z"
            },
            {
                id: 2,
                author: "Peter Travers",
                content: "A daring, dazzling and sometimes deeply disturbing work that confirms Fincher as a major American director.",
                created_at: "1999-10-14T00:00:00.000Z"
            }
        ]
    },
    similar: {
        results: [
            {
                id: 680,
                title: "Pulp Fiction",
                poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                vote_average: 8.5,
                release_date: "1994-09-10"
            },
            {
                id: 629,
                title: "The Usual Suspects",
                poster_path: "/bUPmtQzrRhzrYlZNSeZ5ZBeOZkY.jpg",
                vote_average: 8.3,
                release_date: "1995-07-19"
            },
            {
                id: 769,
                title: "Goodfellas",
                poster_path: "/6QMSLvU5ziILp4lU3nzt7W3LAsx.jpg",
                vote_average: 8.5,
                release_date: "1990-09-12"
            }
        ]
    }
};