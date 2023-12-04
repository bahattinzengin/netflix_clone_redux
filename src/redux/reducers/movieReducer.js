import { actionTypes } from "../actionTypes";

const initialState = {
    populerMovies: [],
    genres: [],
    isMoviesLoading: false,
    isGeneresLoading: false,
    isMoviesError: false,
    isGenresError: false,



}



const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_MOVIES_LOADING:
            return {
                ...state,
                isMoviesLoading: true
            };

        case actionTypes.SET_MOVIES_ERROR:
            return {
                ...state,
                isMoviesLoading: false,
                isMoviesError: true,
            };

        case actionTypes.SET_MOVIES:
            return {
                ...state,
                isMoviesLoading: false,
                isMoviesError: false,
                populerMovies: payload,
            };

        case actionTypes.SET_GENRES_LOADING:
            return {
                ...state,
                isGeneresLoading: true
            };

        case actionTypes.SET_GENRES_ERROR:
            return {
                ...state,
                isGeneresLoading: false,
                isGenresError: true
            };

        case actionTypes.SET_GENRES:
            return {
                ...state,
                isGeneresLoading: false,
                isGenresError: false,
                genres: payload,
            }

        default:
            return state;

    }

}
export default movieReducer;