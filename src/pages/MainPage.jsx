import { useDispatch, useSelector }  from"react-redux";

import { useEffect } from "react";
import { actionTypes } from './../redux/actionTypes';
import Hero from "../Components/Hero";
import { getGenres, getPopuler } from "../redux/actions/movieActions";
import MovieList from "../Components/MovieList";

const MainPage = () => {

    const dispatch = useDispatch();
    const state = useSelector((store) => store);

    useEffect(() => {
        dispatch({ type: actionTypes.SET_MOVIES_LOADING });
        dispatch(getPopuler());
        dispatch({ type: actionTypes.SET_GENRES_LOADING });
        dispatch(getGenres());
     

    }, []);
    // console.log(state);

    return (
        <div>
            {<Hero/>}

            {state.isGenresLoading ? (<Loading />) :

                state.isGenresError ? (<p> üzgünüz hata oluştu</p>) : (
                    state.genres.map((genre) => (
                        <MovieList key={genre.id} genre={genre} />


                    ))
                )
            }
        </div>
    );
};
export default MainPage;
