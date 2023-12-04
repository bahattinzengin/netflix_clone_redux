import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImageURL, options } from './../constants/constant';
import Loading from './../Components/Loading';
import { Splide, SplideSlide } from "@splidejs/react-splide";


const DetailPages = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const [cast, setCast] = useState(null);

    useEffect(() => {

        axios
            .get(`/movie/${id} `, options)
            // .then ((res)=>console.log(res))
            .then((res) => setMovie(res.data))


        axios
            .get(`/movie/${id}/credits`, options)
            // .then((res)=>console.log(res))
            .then((res) => setCast(res.data.cast))
    }, []);

    return (

        <div className="row">
            {!movie ? (<Loading />) : (

                <>
                    <div className="col-12 banner">
                        <img
                            className="w-100 h-100 object-fit-cover"
                            src={baseImageURL.concat(movie.backdrop_path)} />
                        <div className="banner-bg" >
                            <span> {movie.title} </span>
                        </div>

                    </div>


                    <div className="col-md-6 mt-4 p-4" >
                        <h3>Yapımcı Şirketler</h3>
                        <div className="d-flex flex-wrap gap-4">
                            {movie.production_companies.map((comp) => (
                                <div className="bg-white rounded p-2 d-flex align-items-center">
                                    {comp.logo_path ? (
                                        <img
                                            className="object-fit-contain"
                                            title={comp.name}
                                            width={100}
                                            height={50}

                                            src={baseImageURL.concat((comp.logo_path))} />
                                    ) : (
                                        <p
                                            className="text-black text-center"
                                            style={{
                                                width: '100px',
                                                marginTop: '10px'
                                            }}
                                        >
                                            {comp.name}
                                        </p>

                                    )}
                                </div>
                            ))}
                        </div>


                        <h3>Konuşulan Diller</h3>
                        <div className="d-flex flex-wrap gap-4" >

                            {movie.spoken_languages.map((lang) => (
                                <div className="bg-white rounded p-1 text-black">
                                    <span> {lang.english_name}</span>

                                </div>
                            ))}
                        </div>


                        <h3 className="mt-4"> Yapımcı Ülkeler</h3>
                        <div className="d-flex flex-warp gap-4">
                            {movie.production_countries.map((country) => (
                                <div className="bg-white rounded p-1 text-black">

                                    <span>{country.name}</span>

                                </div>
                            ))}
                        </div>





                    </div>


                    <div className="col-md -6 mt-4 p-4"  >
                        <p className="lead">{movie.overview} </p>

                        <p>
                            <span className="fw-bold" > Bütçe :{movie.budget} </span>
                        </p>

                        <p>
                            <span className="fw-bold"> Gelir:{movie.revenue} </span>

                        </p>



                    </div>


                    <div className="col-md-12 p-4 my-3 " >

                        <h2>Oyuncular</h2>

                        <Splide
                            options={{
                                height: '200px',
                                gap: '10px',
                                pagination: false,
                                autoWidth: true,

                            }}
                        >
                            {cast?.map((actor) => (
                                <SplideSlide key={actor.cast_id}>
                                    <div className="actor-card h-100" >
                                        <img

                                            className="movie"
                                            src={baseImageURL.concat(actor.profile_path)} />
                                        <p>
                                            <span> {actor.name} </span>
                                        </p>

                                    </div>

                                </SplideSlide>



                            ))}


                        </Splide>





                    </div>



                </>)}


        </div>



    )

}

export default DetailPages;