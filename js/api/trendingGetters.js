//Chiamata che prende il trending generale
//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
//const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

//opzioni che possono essere date come parametro alla funzione fetch
const options = {
    //method: "GET", //di default viene usato il metodo GET
    headers: {
        //"Content-Type": "application/json", //formato nel quale i dati ci devono essere restituiti
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDViZTBjNjFiOTBiNWE4NmYwNTJiOTExZmIwMzEyMiIsInN1YiI6IjY1ZTg2YTcyYTZjMTA0MDE4N2U5ZWQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wu94QGwPr_U9oDBocKbbc1H9F1a2L0-vwyVE52V4Wcw"
        //nell'authorization abbiamo inserito nella stringa bearer + l'access token
    }, //info aggiuntive date quando facciamo la chiamata
};

export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "all/day?language=en-US", options);

    const data = await response.json();

    return data;
}

/**
 * chiamata che prende il trending generale e ci restituisce solo i film
 * getTrendingMovies
 * @param baseUrl
 * @returns trending movies
*/

export const getTrendingMovies = async (baseUrl) => {
    const response = await fetch(baseUrl + "movie/day?language=en-US", options);

    const data = await response.json();

    return data;
}

