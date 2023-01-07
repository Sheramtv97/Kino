import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios, {get} from "axios";
import {API} from "../../lip/Apikei";
import {languageContext} from "../../context";
import SliceMovie from "../MoviesVideos/SliceMovie";
import Loader from "../../loader";

const ProfilActer = () => {

    const {language} = useContext(languageContext)
    const [movie, setMovie] = useState([])
    const [prof, setProf] = useState({})
    const [AllBiography, setAllBiography] = useState(350)
    const {pro} = useParams()
    const getProfil = async (id, key) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`)
            const {data} = await url
            await setProf(data)
        } catch (e) {
            console.log(e)
        }
    }
    const getMovie = async (id, key) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            const {data} = await url
            await setMovie(data.cast.slice(0,10))
        } catch (e) {
            console.log(e)
        }
    }

    const toggleBiog = (biography) => {
        return AllBiography === 350 ? setAllBiography(biography.length) : setAllBiography(350)
    }

    useEffect(() => {
        getProfil(pro, API)
        getMovie(pro, API)
    }, [language])

    if (movie.length === 0){
        return <Loader/>
    }

    const {profile_path, biography, birthday, place_of_birth, name,} = prof

    return (
        <>
            <div id="proffil">
                <div className="container">
                    <div className="proffil-gen">
                        <Link to={'/movies/movies-detail/:myId'}>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                        </Link>
                        <div style={{margin: "0 20px"}} className="proffil-gen-name">
                            <h1>{name}</h1>
                            <h2>{birthday}</h2>
                            <h4>{place_of_birth}</h4>
                            <p>{biography ? biography.slice(0, AllBiography) : biography}</p>
                            {
                                biography ? biography.length > 350 ? <p style={{color: "blue", cursor: "pointer"}}
                                                                        onClick={() => toggleBiog(biography)}>{AllBiography === 350 ? "Читать ещё..." : "Жабуу"}</p> : "" : biography
                            }
                        </div>
                    </div>
                    <SliceMovie movie={movie}/>

                </div>
            </div>
        </>
    );
};

export default ProfilActer;