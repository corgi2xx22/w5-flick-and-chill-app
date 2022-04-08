const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'df9762deb2a617a672e5de01a8af4f40',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;