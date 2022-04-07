const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apikey:'16389ccd65967602ec242973ff41c369',
    originalImage:(imgPath) =>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) =>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;