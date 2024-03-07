export const BASE_URL = 'https://api.themoviedb.org/3/';

//opzioni che possono essere date come parametro alla funzione fetch
export const OPTIONS = {
    headers: {
        "Content-Type": "application/json", //formato nel quale i dati ci devono essere restituiti
        Authorization: "Bearer "
    
    }, //info aggiuntive date quando facciamo la chiamata
};
