import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API} from "../../lip/Apikei";
import MovieCard from "../api/MovieCard";
import {languageContext} from "../../context";

const SearchResult = () => {
    const {language} = useContext(languageContext)
    const [totalPage,setTotalPage] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const [result,setResult] = useState([])
    const {movieName} = useParams()
    const getResult = async (name, key) =>{
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=${language}&page=${currentPage}`)
        const {data} = await url
        setTotalPage(data.total_pages)
        window.scroll(0,0)
        setResult(data.results)
    }

    useEffect(() =>{
        getResult(movieName,API)
    },[movieName,currentPage,language])

    useEffect(() =>{
        setCurrentPage(1)
    },[movieName])

    return (
        <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        result.map(el => <MovieCard el={el}/>)
                    }
                </div>

                <div style={{display:'flex',justifyContent:'space-between',padding:'0 0 0 40px',
                    marginLeft:'40px'}}>
                    <button style={{
                        visibility: currentPage === 1 ? 'hidden' : 'visible'
                    }} onClick={() =>setCurrentPage(currentPage -1)} className='page-btn'>Next</button>

                    <button style={{
                        visibility: currentPage === totalPage ? 'hidden' : 'visible'
                    }} onClick={() =>setCurrentPage(currentPage +1)}  className='page-btn'>Prev</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;