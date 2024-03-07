//import del package che mi rende disponibili le viariabili d'ambiente
import dotenv from 'dotenv';

//carica le variabili d'ambiente nel file .env
dotenv.config();

export const BASE_URL = 'https://api.themoviedb.org/3/';


//opzioni che possono essere date come parametro alla funzione fetch
export const OPTIONS = {
    headers: {
        "Content-Type": "application/json", //formato nel quale i dati ci devono essere restituiti
        Authorization: `Bearer ${process.env.API_KEY}`
    
    }, //info aggiuntive date quando facciamo la chiamata
};
