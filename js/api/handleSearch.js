import { getSearchMovies } from "./trendingGetters.js";

/**
 * handleSearch
 * 
 * 1. recuperare il tag input grazie all'id
 * 2. recuperare il contenuto del tag input
 * 3. chiamare la funzione getSearchMovies passando il valore dell'input alla funzione come parametro
 * 4. @return restituire il risultato della chiamata getSearchMovies
 */
export const handleSearch = async () => {
    //1.
    const queryInput = document.getElementById("queryInput");

    //2. 
    const queryInputValue = queryInput.value;

    //3.
    const result = await getSearchMovies(queryInputValue);

    console.log(result);
    //4.
    return result;

    
}