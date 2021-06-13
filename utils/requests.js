const API_KEY = process.env.TMDB_API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
  },
  fetchAnimatedMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
  },
  fetchAnimeMovies: {
    title: "Anime Movies",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=true&with_genres=16&with_original_language=ja&with_watch_monetization_types=flatrate`,
  },
  fetchScienceFictionMovies: {
    title: "Sci Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  },
  fetchAnime: {
    title: "Anime",
    url: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16&with_original_language=ja&with_watch_monetization_types=flatrate`,
  },
  fetchWebSeries: {
    title: "Series",
    url: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
  },
};
