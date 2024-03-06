import { getSearchedPerson, getTrending, getTrendingMovies, getTrendingTvSeries } from "./api/trendingGetters.js"
import { baseUrl, person } from "./api/config.js";

getTrending(baseUrl);

getTrendingMovies(baseUrl);

getTrendingTvSeries(baseUrl);

getSearchedPerson(baseUrl, person);

