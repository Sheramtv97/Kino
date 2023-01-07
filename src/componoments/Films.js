import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API} from "../lip/Apikei";
import MovieCard from "./api/MovieCard";
import {languageContext} from "../context";
import Loader from "../loader";

const Films = () => {

    const [popular,setPopular] = useState([])
    const buttons = [1,2,3,4,5,6,7,8,9,10]
    const [stran,setStran] = useState(1)
    const {language} = useContext(languageContext)
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=${language}&page=${stran}`)
        const {data} = await url
        window.scroll(0,0)
        await setPopular(data.results)
    }

    useEffect(() => {
        getPopular()
    },[language,stran])


    if (popular.length === 0){
        return <Loader/>
    }


    return (

        <div id="movies">
            <div className="container">
                <div className="movies">

                    {
                        popular.map(el => (
                         <MovieCard el={el} key={el.id}/>
                            ))
                    }

                </div>

                <div className='pagination'>
                    {
                        buttons.map((el,idx) =>(
                            <button className={stran === idx + 1 ? "active" : ""} onClick={() =>setStran(el)}>{el}</button>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Films;