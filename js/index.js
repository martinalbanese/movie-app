import { getSearchedPerson, getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js";



/**
 * Da aggiungere
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 * id
 * 
 * estrarre la proprietà result (array) da data
 * ciclo l'array results
 * per ogni elemento degli array stamparli
 */

const trendingData = getTrending().then((data) => {
    const trending = data.results
    trending.forEach((element) => {
        console.log(`\n\n
        Media:\n
        ${element.poster_path}\n 
        Id: ${element.id}\n
        Title: ${element.title}\n
        Release date: ${element.release_date}\n
        Vote average: ${element.vote_average}\n
        Media type: ${element.media_type}`)
    })
});

getTrendingMovies();

getTrendingTvSeries();

getSearchedPerson("Clooney");

