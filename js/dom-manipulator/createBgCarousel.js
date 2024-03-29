import {IMG_PATH } from './../api/config.js'

export const createBgCarousel = (movies, elementId) => {
    // Prende elementi dall'html
    const carouselContainer = document.getElementById(elementId);

    movies.results.forEach(movie => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const backdropUrl = IMG_PATH + movie.backdrop_path;
        carouselItem.style.backgroundImage = `url(${backdropUrl})`;

        const movieTitle = movie.title;
        const titleElement = document.createElement("h1");
        titleElement.textContent = movieTitle;
        titleElement.classList.add('movieTitle');

        const movieInfo = document.createElement("div");
        movieInfo.classList.add('movieInfo', 'carousel-container');

        const maturityNumber = movie.adult ? "18+" : "16+";
        const maturitySpan = document.createElement("span");
        maturitySpan.textContent = maturityNumber;
        maturitySpan.classList.add('maturityNumber');

        const voteAverage = movie.vote_average;
        const voteSpan = document.createElement("span");
        voteSpan.textContent = voteAverage;
        voteSpan.classList.add("voteAverage");

        const language = movie.original_language;
        const languageSpan = document.createElement("span");
        languageSpan.textContent = language;
        languageSpan.classList.add("language");

        const buttons = document.createElement("div");
        buttons.classList.add("button-container");

        const detailsButton = document.createElement("button");
        detailsButton.classList.add('detailsButton');
        detailsButton.textContent = "Details";

        detailsButton.addEventListener("click", () => {
            showMovieDetails(movie);
        })

        buttons.appendChild(detailsButton);

        movieInfo.append(maturitySpan, voteSpan, languageSpan);

        carouselItem.appendChild(titleElement);
        carouselItem.appendChild(movieInfo);
        carouselItem.appendChild(buttons);

        carouselContainer.appendChild(carouselItem);
    });

    carouselContainer.children[0].classList.add('active');
};

const showMovieDetails = (movie) => {
    // Area per visualizzare info dettagliate sui film
    const detailsSection = document.createElement("div");
    detailsSection.classList.add("movie-details");
    

    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;

    const movieInfo = document.createElement("div");
        movieInfo.classList.add('movieInfo', 'carousel-container');

        const maturityNumber = movie.adult ? "18+" : "16+";
        const maturitySpan = document.createElement("span");
        maturitySpan.textContent = maturityNumber;
        maturitySpan.classList.add('maturityNumber');

        const voteAverage = movie.vote_average;
        const voteSpan = document.createElement("span");
        voteSpan.textContent = voteAverage;
        voteSpan.classList.add("voteAverage");

        const language = movie.original_language;
        const languageSpan = document.createElement("span");
        languageSpan.textContent = language;
        languageSpan.classList.add("language");

        const description = document.createElement("p");
        description.textContent = movie.overview;

        const releaseDate = document.createElement("p");
        releaseDate.textContent = `Release Date: ${movie.release_date}`;

        const playButton = document.createElement("button");
        playButton.textContent = "Play";
        playButton.classList.add("playButton");
        playButton.addEventListener("click", () => {
            alert("Starting movie playback...");
        });

        movieInfo.append(maturitySpan, voteSpan, languageSpan);

        detailsSection.appendChild(titleElement);
        detailsSection.appendChild(movieInfo);
        detailsSection.appendChild(description);
        detailsSection.appendChild(releaseDate);
        detailsSection.appendChild(playButton);

        detailsSection.style.display = "block";

        const carouselContainer = document.getElementById("carouselExampleAutoplaying");
        carouselContainer.insertAdjacentElement("afterend", detailsSection);
}

export const resetMovieDetails = () => {
    // Rimuovi la sezione dei dettagli
    const detailsSection = document.querySelector('.movie-details');
    if (detailsSection) {
        detailsSection.remove();
    }
}

export const createBgCarouselSeries = (movies, elementId) => {
    // Prende elementi dall'html
    const carouselContainer = document.getElementById(elementId);

    movies.results.forEach(movie => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const backdropUrl = IMG_PATH + movie.backdrop_path;
        carouselItem.style.backgroundImage = `url(${backdropUrl})`;

        const movieTitle = movie.name;
        const titleElement = document.createElement("h1");
        titleElement.textContent = movieTitle;
        titleElement.classList.add('movieTitle');

        const movieInfo = document.createElement("div");
        movieInfo.classList.add('movieInfo', 'carousel-container');

        const maturityNumber = movie.adult ? "18+" : "16+";
        const maturitySpan = document.createElement("span");
        maturitySpan.textContent = maturityNumber;
        maturitySpan.classList.add('maturityNumber');

        const voteAverage = movie.vote_average;
        const voteSpan = document.createElement("span");
        voteSpan.textContent = voteAverage;
        voteSpan.classList.add("voteAverage");

        const language = movie.original_language;
        const languageSpan = document.createElement("span");
        languageSpan.textContent = language;
        languageSpan.classList.add("language");

        const buttons = document.createElement("div");
        buttons.classList.add("button-container");

        const detailsButton = document.createElement("button");
        detailsButton.classList.add('detailsButton');
        detailsButton.textContent = "Details";

        detailsButton.addEventListener("click", () => {
            showSerieDetails(movie);
        })

        buttons.appendChild(detailsButton);

        movieInfo.append(maturitySpan, voteSpan, languageSpan);

        carouselItem.appendChild(titleElement);
        carouselItem.appendChild(movieInfo);
        carouselItem.appendChild(buttons);

        carouselContainer.appendChild(carouselItem);
    });

    carouselContainer.children[0].classList.add('active');
};

const showSerieDetails = (movie) => {
    // Area per visualizzare info dettagliate sui film
    const detailsSection = document.createElement("div");
    detailsSection.classList.add("movie-details");
    detailsSection.innerHTML = '';

    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.name;

    const movieInfo = document.createElement("div");
        movieInfo.classList.add('movieInfo', 'carousel-container');

        const maturityNumber = movie.adult ? "18+" : "16+";
        const maturitySpan = document.createElement("span");
        maturitySpan.textContent = maturityNumber;
        maturitySpan.classList.add('maturityNumber');

        const voteAverage = movie.vote_average;
        const voteSpan = document.createElement("span");
        voteSpan.textContent = voteAverage;
        voteSpan.classList.add("voteAverage");

        const language = movie.original_language;
        const languageSpan = document.createElement("span");
        languageSpan.textContent = language;
        languageSpan.classList.add("language");

        const description = document.createElement("p");
        description.textContent = movie.overview;

        const releaseDate = document.createElement("p");
        releaseDate.textContent = `Release Date: ${movie.first_air_date}`;

        const playButton = document.createElement("button");
        playButton.textContent = "Play";
        playButton.classList.add("playButton");
        playButton.addEventListener("click", () => {
            alert("Starting movie playback...");
        });

        movieInfo.append(maturitySpan, voteSpan, languageSpan);

        detailsSection.appendChild(titleElement);
        detailsSection.appendChild(movieInfo);
        detailsSection.appendChild(description);
        detailsSection.appendChild(releaseDate);
        detailsSection.appendChild(playButton);

        detailsSection.style.display = "block";

        const carouselContainer = document.getElementById("carouselExampleAutoplaying");
        carouselContainer.insertAdjacentElement("afterend", detailsSection);
}