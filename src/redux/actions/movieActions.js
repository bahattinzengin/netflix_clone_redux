import axios from "axios"
import { actionTypes } from "../actionTypes"
import { options } from "../../constants/constant";
axios.defaults.baseURL ='https://api.themoviedb.org/3'

export const   getPopuler =()=>(dispatch) =>{
    axios 
    .get ('/movie/popular',options)
    // .then ((res)=>console.log(res.data))
    .then ((res)=>dispatch({
        type:actionTypes.SET_MOVIES,
        payload:res.data.results,
    }))
  
    .catch((err)=>dispatch({type:actionTypes.SET_MOVIES_ERROR}));
    
};

export const getGenres = ()=>(dispatch)=>{
axios
.get('/genre/movie/list?language=en',options)
.then ((res)=>dispatch({type:actionTypes.SET_GENRES,
payload:res.data.genres,}))
.catch ((err)=>dispatch({type:actionTypes.SET_GENRES_ERROR}))


}