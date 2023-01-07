import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API} from "../../lip/Apikei";
import CastSlider from "./CastSlider";
import ModalWindow from "./ModalWindow";
import MovieVideos from "../MoviesVideos";
import {BsPlayFill} from "react-icons/bs";
import {languageContext} from "../../context";
import Loader from "../../loader";

const DetailCard = () => {
    const [detail,setDetail] = useState({})
    const [cast,setCast] = useState([])
    const [modal,setModal] = useState(false)
    const {language} = useContext(languageContext)
    const {myId} = useParams()

    const getDetail = async (id,key) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            const {data} = await url
            await setDetail(data)
        }catch (e){
            console.log(e)
        }
    }
    const getCast = async (id,key) => {
       try {
           const url = await axios(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
           const {data} =  url
           await setCast(data.cast)
       }catch (e){
           console.error(e)
       }
    }


    useEffect(() =>{
       getDetail(myId,API)
        getCast(myId,API)
    },[language])

    const {title,poster_path,overview,vote_average,backdrop_path,release_date} = detail

    console.log(detail)

    if (cast.length === 0){
        return <Loader/>
    }

    return (
     <>
         <div style={{
             background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`
         }} id="detail-page">
             <div className="container">
                 <div className="detail-page">
                     <div>
                         <ModalWindow el={detail} setModal={setModal} modal={modal}/>
                         <div className="see">
                             <button>Смотреть <BsPlayFill style={{fontSize:'20px'}}/> </button>
                         </div>
                     </div>

                     <div className='detail-page--description'>
                         
                         <h1 style={{margin: "20px 0"}} >{title} <h4>({release_date})</h4></h1>
                         <h3 style={{margin: "20px 0"}} >{vote_average}%</h3>
                         <div className='rating'>
                             <h3>{Math.round(vote_average * 10)}%</h3>
                         </div>
                         <p style={{padding: "10px 0"}}>{overview}</p>



                     </div>

                 </div>
             </div>
         </div>


         <div className="container">
             <div className="cast">
                 <CastSlider cast={cast}/>

                 <div className="videos">
                     <MovieVideos myId={myId} />
                 </div>
             </div>

         </div>



     </>
    );
};

export default DetailCard;
