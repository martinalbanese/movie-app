import { IMG_PATH } from './../api/index.js'

export const createMoviesCarousel = (movies, elementId, rightArrow, leftArrow) => {
    const carouselContainer = document.getElementById(elementId);
    const carousel = document.createElement("div");
    carousel.classList = "movieCarousel";

    const shuffledResults = movies.results.sort(() => 0.5 - Math.random());
    
    shuffledResults.slice().forEach(movie => {
        const imgContainer = document.createElement("div"); 
        imgContainer.classList.add("movie-info-container");
        
        const img = document.createElement("img");
        img.src = IMG_PATH + movie.backdrop_path;
        img.alt = "Movie Poster";
        img.style.objectFit = "cover";
        img.width = 330;
        img.height = 190;
        
        
        const title = document.createElement("h2");
        title.textContent = movie.title;
        title.classList.add("movie-title");
    
        const description = document.createElement("p");
        description.textContent = movie.overview.substring(0, 50) + '...'; 
        description.classList.add("movie-description");
    
        const moreLink = document.createElement("a");
        moreLink.href = '#'; 
        moreLink.textContent = "Vedi di più";
        moreLink.classList.add("more-link");
        
        // Funzione che permette di mostrare o nascondere delle informazioni al click del mouse
        const showInfo = () => {
            if(title.style.display == "block") {
                title.style.display = "none";
                description.style.display = "none";
                moreLink.style.display = "none";
                img.style.opacity = "1";
            } else {
                title.style.display = "block";
                description.style.display = "block";
                moreLink.style.display = "block";
                img.style.opacity = "0.5";
            }
        }
        img.addEventListener("click", showInfo);

        //Funzioni per spostarsi a destra e a sinistra
        let position=0;
        let index=0;
        let scrollRight=document.getElementById(rightArrow);
        scrollRight.addEventListener("click",()=>{
            if(index<17) {
            index++;
            position+=imgContainer.offsetWidth;
            carousel.style.transform=`translateX(-${position}px)`;
            }
        })

        let scrollLeft=document.getElementById(leftArrow);
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

export const createSeriesCarousel = (series, elementId, rightArrow, leftArrow) => {
    const carouselContainer = document.getElementById(elementId);
    const carousel = document.createElement("div");
    carousel.classList = "seriesCarousel";

    const shuffledResults = series.results.sort(() => 0.5 - Math.random());
    
    shuffledResults.slice().forEach(serie => {
        const imgContainer = document.createElement("div"); 
        imgContainer.classList.add("series-info-container");
        
        const img = document.createElement("img");
        img.src = IMG_PATH + serie.backdrop_path;
        img.alt = "Movie Poster";
        img.style.objectFit = "cover";
        img.width = 330;
        img.height = 190;
        
        const title = document.createElement("h2");
        title.textContent = serie.name;
        title.classList.add("series-title");
    
        const description = document.createElement("p");
        description.textContent = serie.overview.substring(0, 50) + '...'; 
        description.classList.add("series-description");
    
        const moreLink = document.createElement("a");
        moreLink.href = '#'; 
        moreLink.textContent = "Vedi di più";
        moreLink.classList.add("more-link");
        
        // Funzione che permette di mostrare o nascondere delle informazioni al click del mouse
        const showInfo = () => {
            if(title.style.display == "block") {
                title.style.display = "none";
                description.style.display = "none";
                moreLink.style.display = "none";
                img.style.opacity = "1";
            } else {
                title.style.display = "block";
                description.style.display = "block";
                moreLink.style.display = "block";
                img.style.opacity = "0.5";
            }
        }
        img.addEventListener("click", showInfo);

        //Funzioni per spostarsi a destra e a sinistra
        let position=0;
        let index=0;
        let scrollRight=document.getElementById(rightArrow);
        scrollRight.addEventListener("click",()=>{
            if(index<17){
            index++;
            position+=imgContainer.offsetWidth;
            carousel.style.transform=`translateX(-${position}px)`;
            }
        })

        let scrollLeft=document.getElementById(leftArrow);
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
