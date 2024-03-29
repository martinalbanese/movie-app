/*funzione che al caricamento della pagina verifichi 
che il titolo sia corretto sennè lo corregge*/

export const fixTitle = () => {
    const title = document.getElementById('header');

    const titleContent = title.innerHTML;

    if(titleContent === "N<em>o</em>TFLIX"){
        return
    } else {
        title.innerHTML = "N<em>o</em>TFLIX";
    }
};


