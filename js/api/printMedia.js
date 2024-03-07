export const printMedia = async (element) => {
   switch(element.media_type) {
        case 'movie':
            console.log(
            `ID:${element.id},\n` +
            `Poster Path:${element.poster_path},\n` +
            `Title:${element.title},\n` +
            `Vote Average:${element.vote_average},\n` +
            `Media Type:${element.media_type},\n` +
            `Release Date:${element.release_date}\n`)
        break;
  
        case 'tv':
            console.log(
                `ID:${element.id},\n` +
                `Poster Path:${element.poster_path},\n` +
                `Title:${element.name},\n` +
                `Vote Average:${element.vote_average},\n` +
                `Media Type:${element.media_type},\n` +
                `Release Date:${element.first_air_date}\n`)
        break;
    
        case 'person': 
            console.log(
                `ID:${element.id},\n` +
                `Poster Path:${element.profile_path},\n` +
                `Title:${element.name},\n` +
                `Media Type:${element.media_type},\n`)
        break;

        default:
            console.log(
                `ID:${element.id},\n` +
                `Poster Path:${element.poster_path},\n` +
                `Title:${element.title},\n` +
                `Vote Average:${element.vote_average},\n` +
                `Media Type:${element.media_type},\n` +
                `Release Date:${element.release_date}\n`)
            break;
  } 
}
