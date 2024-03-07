import { BASE_URL, OPTIONS } from "./config.js";

export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * chiamata che prende il trending generale e ci restituisce solo i film
 * getTrendingMovies
 * @param baseUrl
 * @returns film di tendenza
*/

export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * chiamata che prende il trending generale e ci restituisce solo le serie tv
 * getTrendingTvSeries
 * @param baseUrl
 * @returns serie tv di tendenza
 */

export const getTrendingTvSeries = async () => {
    const response = await fetch(BASE_URL + "tv/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * chiamata che permette di fare ricerche per nome di persona
 * getSearchedPerson
 * 
 * @return film o serie tv che includono quella persona
 */

export const getSearchedPerson = async (personToSearch) => {
    const response = await fetch(BASE_URL + `search/person?query=${personToSearch}`, OPTIONS);

    const data = await response.json();

    return data;
}