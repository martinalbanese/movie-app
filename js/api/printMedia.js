export const printMedia = async (element) => {
   switch(element.media_type) {
        case 'movie':
            console.log(`\n\n
            Media:\n
            ${element.poster_path}\n 
            Id: ${element.id}\n
            Title: ${element.title}\n
            Release date: ${element.release_date}\n
            Vote average: ${element.vote_average}\n
            Media type: ${element.media_type}`)
        break;
  
        case 'tv':
        console.log(`\n\n
            Media:\n
            ${element.poster_path}\n 
            Id: ${element.id}\n
            Title: ${element.title}\n
            Release date: ${element.release_date}\n
            Vote average: ${element.vote_average}\n
            Media type: ${element.media_type}`)
        break;
    
        case 'person': 
        console.log(`\n\n
            Media:\n
            ${element.poster_path}\n 
            Id: ${element.id}\n
            Title: ${element.title}\n
            Release date: ${element.release_date}\n
            Vote average: ${element.vote_average}\n
            Media type: ${element.media_type}`)   
        break;

        default:
            case 'movie':
                console.log(`\n\n
                Media:\n
                ${element.poster_path}\n 
                Id: ${element.id}\n
                Title: ${element.title}\n
                Release date: ${element.release_date}\n
                Vote average: ${element.vote_average}\n
                Media type: ${element.media_type}`)
            break;
  } 
}
