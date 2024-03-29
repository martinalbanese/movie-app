import { BASE_URL, OPTIONS, SEARCH_URL } from "./config.js";

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

export const getDiscoverMovies = async () => {
    const response = await fetch(BASE_URL + 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * getSearchMovies
 * 
 * @description: funzione che riceve come parametro una stringa che corrisponde a una parola chiave legata ai film che si stanno cercando
 * Restituisce un oggetto con la risposta della chiamata API che contiene l'array dei risultati
 * 
 * @param query una stringa che corrisponde all'input dell'utente
 * 
 * @return l'oggetto risultante dalla chiamata API
 */

export const getSearchMovies = async (query) => {
    const response = await fetch(SEARCH_URL + query, OPTIONS);

    const data = await response.json();

    return data;
}