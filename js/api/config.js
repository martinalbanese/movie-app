export const BASE_URL = 'https://api.themoviedb.org/3/';

//opzioni che possono essere date come parametro alla funzione fetch
export const OPTIONS = {
    headers: {
        "Content-Type": "application/json", //formato nel quale i dati ci devono essere restituiti
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDViZTBjNjFiOTBiNWE4NmYwNTJiOTExZmIwMzEyMiIsInN1YiI6IjY1ZTg2YTcyYTZjMTA0MDE4N2U5ZWQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wu94QGwPr_U9oDBocKbbc1H9F1a2L0-vwyVE52V4Wcw"
    
    }, //info aggiuntive date quando facciamo la chiamata
};
