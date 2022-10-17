import { async } from "regenerator-runtime";
import LikeButtonInitiator from "../../src/scripts/utils/like-button-presenter";
import FavoriteMovieIdb from "../../src/scripts/data/favorite-movie-idb";

const createLikeButtonPresenterWithMovie = async (movie) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteMovies: FavoriteMovieIdb,
        movie,
    });
};

export { createLikeButtonPresenterWithMovie };