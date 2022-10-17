import { itActsAsFavoriteMovieModel } from "./contract/favoriteMovieContract";
import FavoriteMovieIdb from "../src/scripts/data/favorite-movie-idb";
import { async } from "regenerator-runtime";

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
            await FavoriteMovieIdb.deleteMovie(movie.id);
        });
    });

    itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});