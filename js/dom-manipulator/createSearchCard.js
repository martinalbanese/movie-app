import { handleSearch } from "../api/handleSearch.js";

export const createSearchCard = (movies) =>  {
    const cardContainer = document.getElementById("searchCards");
    cardContainer.innerHTML = '';

    movies.results.forEach(element => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.src = 'https://image.tmdb.org/t/p/w500' + element.backdrop_path;
        img.alt = `${element.title} Poster`;
        img.classList.add("card-img-top");

        const body = document.createElement("div");
        body.classList.add("card-body");
        
        const title = document.createElement("h5");
        title.textContent = element.title;
        title.classList.add("card-title");

        const overview = document.createElement("p");
        overview.textContent = element.overview.substring(0, 150) + '...';;
        overview.classList.add("card-text");

        const buttons = document.createElement("div");
        buttons.classList.add("button-container");

        const detailsButton = document.createElement("button");
        detailsButton.classList.add('detailsButton');
        detailsButton.textContent = "Details";

        buttons.appendChild(detailsButton);

        body.appendChild(title);
        body.appendChild(overview);
        body.appendChild(buttons);

        card.appendChild(img);
        card.appendChild(body);

        cardContainer.appendChild(card);
    });

};

export const collectSearchResults = async () => {
    const collectResults = await handleSearch();

    createSearchCard(collectResults);
}