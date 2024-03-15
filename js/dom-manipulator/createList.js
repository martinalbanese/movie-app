import { IMG_PATH } from "./../api/config.js";


export const createCard = (movies) => {
    
    const cardContainer = document.getElementById("movies-card");

    movies.results.forEach(element => {

        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = IMG_PATH + element.backdrop_path;
        image.alt = `Poster ${element.title}`

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerText = element.overview; 

        textContainer.appendChild(title);

        textContainer.appendChild(description);
        
        card.appendChild(textContainer);

        card.appendChild(image);

        cardContainer.appendChild(card);
        
   })
}

