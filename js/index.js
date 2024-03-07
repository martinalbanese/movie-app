import { printMedia } from "./api/printMedia.js";
import { getTrending } from "./api/trendingGetters.js";
//import { getSearchedPerson, getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js";



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
        printMedia(element);
    })
});


/* const trendingMovie = getTrendingMovies();

const tendingTvSeries = getTrendingTvSeries();

const searchedPerson = getSearchedPerson("Clooney");

 */