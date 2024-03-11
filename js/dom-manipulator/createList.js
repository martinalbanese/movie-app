/**
 * createTrendingMoviesList()
 * 
 * funzione prende in ingresso array di movies
 * per ogni movie aggiunge al dom un nuovo nodo
 * che sarà un tag <li> contente il titolo del movie 
 * 
 * @param array dei film
 * @returns 
 */

/* export const createTrendingMoviesList = (movies) => {
    //recupero il nodo ul con id 
    const list = document.getElementById("trending-movies-list");
    
    //ciclo su ogni elemento dell'array che viene preso in ingresso
    //come parametro
    movies.results.forEach(element => {
        //creiamo un nuovo nodo che corrisponde a un tag li        
        const listItem = document.createElement("li");

        //impostiamo il contenuto del tag li appena creato
        //assegnando il valore del titledell'elemento corrente
        //in questa iterazione dell'array
        listItem.textContent = element.title;

        /* if (index % 2 === 0) listItem.classList.add("list-group-item-secondary");
        listItem.classList.add("list-group-item-secondary");

        //appendiamo alla pagina hrml il nuovo tag creato sul tag ul dell'html
        list.appendChild(listItem);
    });
} */

export const createTrendingList = (movies, ul) => {
     //recupero il nodo ul con id 
        const list = document.getElementById(ul)

    //ciclo su ogni elemento dell'array che viene preso in ingresso
    //come parametro
    movies.results.forEach(element => {
        const listItem = document.createElement("li");
            switch(element.media_type){
                case 'movie':
                    listItem.textContent = element.title;
                    break;
                case 'tv':
                    listItem.textContent = element.title;
                    break;
                case 'person':
                    listItem.textContent = element.title;
                    break;
            }
        list.appendChild(listItem);
        });
}
