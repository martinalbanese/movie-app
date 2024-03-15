/*funzione che al caricamento della pagina verifichi 
che il titolo sia corretto sennè lo corregge*/

export const fixTitle = () => {
    const title = document.getElementById('header');

    const titleContent = title.innerHTML;

    if(titleContent === "NOTFLIX"){
        return
    } else {
        title.innerHTML = "NOTFLIX";
    }
};

/**funzione che al caricamento aggiunge un paragrafo con
 * il titolo di un film
 */

/* export const addParagraph = () => {
    const title = document.getElementById("header");
    
    const paragraph = document.createElement("p");

    paragraph.innerHTML = "Indiana Jones";

    title.appendChild(paragraph);
} */


