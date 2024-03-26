import {IMG_PATH } from './../api/config.js'

export const createCard = (movies, elementBackground, elementId) => {
    // Prende elementi dall'html
    const cardContainer = document.getElementById(elementId);

    const backgroundImg = document.getElementById(elementBackground);

    // Crea nuovi elementi da appendere agli elementi esistenti nell'html
    const infoContainer = document.createElement("div");
    infoContainer.classList.add('infoContainer');

    const randomIndex = Math.floor(Math.random() * movies.results.length);

    const movieTitle = movies.results[randomIndex].title;
    const titleElement = document.createElement("h1");
    titleElement.textContent = movieTitle;
    titleElement.classList.add('movieTitle');

    const movieInfo = document.createElement("div");
    movieInfo.classList.add('movieInfo');

    const maturityNumber = movies.results[randomIndex].adult ? "18+" : "16+";
    const maturitySpan = document.createElement("span");
    maturitySpan.textContent = maturityNumber;
    maturitySpan.classList.add('maturityNumber');

    const voteAverage = movies.results[randomIndex].vote_average;
    const voteSpan = document.createElement("span")
    voteSpan.textContent = voteAverage;
    voteSpan.classList.add("voteAverage");

    const language = movies.results[randomIndex].original_language;
    const languageSpan = document.createElement("span")
    languageSpan.textContent = language;
    languageSpan.classList.add("language");
    
    const movieOverview = movies.results[randomIndex].overview;
    const overview = document.createElement("p")
    overview.textContent = movieOverview;
    overview.classList.add('movieOverview');

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const playButton = document.createElement("button");
    playButton.classList.add('playButton');
    playButton.textContent = "Play now";

    const detailsButton = document.createElement("button");
    detailsButton.classList.add('detailsButton');
    detailsButton.textContent = "Details";

    const movieBackdrop = movies.results[randomIndex].backdrop_path;
    const backdropUrl = IMG_PATH + movieBackdrop;

    backgroundImg.style.backgroundImage = `url(${backdropUrl})`;

    // Appende gli elementi creati agli elementi esistenti nell'html
    buttons.appendChild(playButton);
    buttons.appendChild(detailsButton);

    movieInfo.append(maturitySpan, voteSpan, languageSpan);

    infoContainer.appendChild(titleElement);
    infoContainer.appendChild(movieInfo);
    infoContainer.appendChild(overview);
    infoContainer.appendChild(buttons);

    cardContainer.appendChild(infoContainer);
}
