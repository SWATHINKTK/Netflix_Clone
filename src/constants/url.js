import { API_KEY } from "./Constants";

export const trending = `/trending/movie/day?language=en-US&api_key=${API_KEY}`;
export const genres = `/genre/movie/list?api_key=${API_KEY}`;
export const genreMovie = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`;
