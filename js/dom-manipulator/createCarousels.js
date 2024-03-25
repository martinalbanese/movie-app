export const createMoviesCarousel = (movies) => {
    const carouselContainer = document.querySelector("#movies-section");
    const carousel = document.createElement("div");
    carousel.classList = "movieCarousel";

    const carouselText = document.querySelector(".movies-carousel-text");
    carouselText.textContent = "Movies we think you'll like";

    const shuffledResults = movies.results.sort(() => 0.5 - Math.random());
    
    shuffledResults.slice().forEach(movie => {
        const imgContainer = document.createElement("div"); 
        imgContainer.classList.add("movie-info-container");
        
        const img = document.createElement("img");
        img.src = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
        img.alt = "Movie Poster";
        img.style.objectFit = "cover";
        img.width = 330;
        img.height = 190;
        
        
        const title = document.createElement("h2");
        title.textContent = movie.title;
        title.classList.add("movie-title");
    
        const description = document.createElement("p");
        description.textContent = movie.overview.substring(0, 100) + '...'; 
        description.classList.add("movie-description");
    
        const moreLink = document.createElement("a");
        moreLink.href = '#'; 
        moreLink.textContent = "Vedi di più";
        moreLink.classList.add("more-link");
        
        const showInfo = () => {
            if(title.style.display = "block") {
                title.style.display = "none";
                description.style.display = "none";
                moreLink.style.display = "none";
            } else {
                title.style.display = "block";
                description.style.display = "block";
                moreLink.style.display = "block";
            }
        }

        // Evento mouseenter per mostrare le informazioni
        img.addEventListener("click", showInfo);

        /* // Funzione per mostrare il titolo, la descrizione e il link "Vedi di più"
        const showInfo = () => {
            title.style.display = "block";
            description.style.display = "block";
            moreLink.style.display = "block";
        };

        // Funzione per nascondere il titolo, la descrizione e il link "Vedi di più"
        const hideInfo = () => {
            title.style.display = "none";
            description.style.display = "none";
            moreLink.style.display = "none";
        }; */

        /* // Evento mouseleave per nascondere le informazioni
        img.addEventListener("click", hideInfo); */

        let position=0;
        let index=0;
        let scrollRight=document.getElementById("rightMovies");
        scrollRight.addEventListener("click",()=>{
            if(index<17) {
            index++;
            position+=imgContainer.offsetWidth;
            carousel.style.transform=`translateX(-${position}px)`;
            }
        })

        let scrollLeft=document.getElementById("leftMovies");
        scrollLeft.addEventListener("click",()=>{
            if(index>=0){
                index--;
                position-=imgContainer.offsetWidth;
                carousel.style.transform=`translateX(-${position}px)`;
            }
        })
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(title);
        imgContainer.appendChild(description);
        imgContainer.appendChild(moreLink);
        
        carousel.appendChild(imgContainer);
    });
    carouselContainer.appendChild(carousel);
}

export const createSeriesCarousel = (series) => {
    const carouselContainer = document.querySelector("#series-section");
    const carousel = document.createElement("div");
    carousel.classList = "seriesCarousel";

    const carouselText = document.querySelector(".series-carousel-text");
    carouselText.textContent = "Binge-Worthy Tv Series";

    const shuffledResults = series.results.sort(() => 0.5 - Math.random());
    
    shuffledResults.slice().forEach(serie => {
        const imgContainer = document.createElement("div"); 
        imgContainer.classList.add("series-info-container");
        
        const img = document.createElement("img");
        img.src = 'https://image.tmdb.org/t/p/w500' + serie.backdrop_path;
        img.alt = "Movie Poster";
        img.style.objectFit = "cover";
        img.width = 330;
        img.height = 190;
        
        const title = document.createElement("h2");
        title.textContent = serie.name;
        title.classList.add("series-title");
    
        const description = document.createElement("p");
        description.textContent = serie.overview.substring(0, 100) + '...'; 
        description.classList.add("series-description");
    
        const moreLink = document.createElement("a");
        moreLink.href = '#'; 
        moreLink.textContent = "Vedi di più";
        moreLink.classList.add("more-link");
        
        /* // Funzione per mostrare il titolo, la descrizione e il link "Vedi di più"
        const showInfo = () => {
            title.style.display = "block";
            description.style.display = "block";
            moreLink.style.display = "block";
        };

        // Funzione per nascondere il titolo, la descrizione e il link "Vedi di più"
        const hideInfo = () => {
            title.style.display = "none";
            description.style.display = "none";
            moreLink.style.display = "none";
        }; */

        //Funzioni per spostarsi a destra e a sinistra
        let position=0;
        let index=0;
        let scrollRight=document.getElementById("rightSeries");
        scrollRight.addEventListener("click",()=>{
            if(index<17){
            index++;
            position+=imgContainer.offsetWidth;
            carousel.style.transform=`translateX(-${position}px)`;
            }
        })

        let scrollLeft=document.getElementById("leftSeries");
        scrollLeft.addEventListener("click",()=>{
            if(index>=0){
                index--;
                position-=imgContainer.offsetWidth;
                carousel.style.transform=`translateX(-${position}px)`;
            }
        })

        /* // Evento mouseenter per mostrare le informazioni
        img.addEventListener("click", showInfo);

        // Evento mouseleave per nascondere le informazioni
        img.addEventListener("click", hideInfo); */
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(title);
        imgContainer.appendChild(description);
        imgContainer.appendChild(moreLink);
        
        carousel.appendChild(imgContainer);
    });
    carouselContainer.appendChild(carousel);
}