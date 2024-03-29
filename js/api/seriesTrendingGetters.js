import { BASE_URL, OPTIONS } from "./config.js";

/**
 * chiamata che prende il trending generale e ci restituisce solo le serie tv
 * getTrendingTvSeries
 * @param baseUrl
 * @returns serie tv di tendenza
 */

export const getTrendingTvSeries = async () => {
    const response = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;
}

export const getDiscoverTvSeries = async () => {
    const response = await fetch(BASE_URL + "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", OPTIONS);

    const data = await response.json();

    return data;
}