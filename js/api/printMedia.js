export const printMedia = async (element) => {
   switch(element.media_type) {
        case 'movie':
            console.log(
            `ID:${media.id},\n` +
            `Poster Path:${media.poster_path},\n` +
            `Title:${media.title},\n` +
            `Vote Average:${media.vote_average},\n` +
            `Media Type:${media.media_type},\n` +
            `Release Date:${media.release_date}\n`)
        break;
  
        case 'tv':
            console.log(
                `ID:${media.id},\n` +
                `Poster Path:${media.poster_path},\n` +
                `Title:${media.title},\n` +
                `Vote Average:${media.vote_average},\n` +
                `Media Type:${media.media_type},\n` +
                `Release Date:${media.release_date}\n`)
        break;
    
        case 'person': 
            console.log(
                `ID:${media.id},\n` +
                `Poster Path:${media.poster_path},\n` +
                `Title:${media.title},\n` +
                `Vote Average:${media.vote_average},\n` +
                `Media Type:${media.media_type},\n` +
                `Release Date:${media.release_date}\n`)
        break;

        default:
            console.log(
                `ID:${media.id},\n` +
                `Poster Path:${media.poster_path},\n` +
                `Title:${media.title},\n` +
                `Vote Average:${media.vote_average},\n` +
                `Media Type:${media.media_type},\n` +
                `Release Date:${media.release_date}\n`)
            break;
  } 
}
