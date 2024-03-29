export const BASE_URL = 'https://api.themoviedb.org/3/';

export const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?query='

export const IMG_PATH = 'https://image.tmdb.org/t/p/original';

//per risolvere il problema dell'errore dotenv
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDViZTBjNjFiOTBiNWE4NmYwNTJiOTExZmIwMzEyMiIsInN1YiI6IjY1ZTg2YTcyYTZjMTA0MDE4N2U5ZWQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wu94QGwPr_U9oDBocKbbc1H9F1a2L0-vwyVE52V4Wcw"

export const OPTIONS = {
    headers: {
        "Content-Type": "application/json", //formato nel quale i dati ci devono essere restituiti
        Authorization: `Bearer ${API_KEY}`
    
    }, //info aggiuntive date quando facciamo la chiamata
};