let hulu = {
    id: 1,
    movies: [{
            title: 'house on fire',
            genre: ['scary', 'firey', 'hot'],
            rating: '3',
            run_time: 85,
            year_released: 2003,
        },
        {
            title: 'prey',
            genre: ['monster', 'western', 'indigenous'],
            rating: '5',
            run_time: 115,
            year_released: 2022,
        },
        {
            title: 'mystic pizza',
            genre: ['food', 'cheesey', 'romantic'],
            rating: '4',
            run_time: 95,
            year_released: 1999,
        },
    ],
    shows: [{
        Title: 'Seinfeld',
        NumSeasons: '9',
        Seasons: [{
                seasonnum: 1,
                episodenum: 2,
                episodes: [{
                    episodetitle: 'soup nazi',
                    airdate: 1999 - 01 - 12,
                }, {
                    episodetitle: 'hot coffee',
                    airdate: 1999 - 01 - 20,
                }],
            },
            {
                seasonnum: 2,
                episodenum: 2,
                episodes: [{
                        episodetitle: 'jerry merry',
                        airdate: 2000 - 01 - 02,
                    },
                    {
                        episodetitle: 'yankee boss man',
                        airdate: 2000 - 01 - 12,
                    }
                ]
            }
        ]
    }]
}


console.log(hulu.movies);
console.log(hulu.shows[0].Title);
console.log(hulu.shows[0].Seasons[1].episodes[0].episodetitle);