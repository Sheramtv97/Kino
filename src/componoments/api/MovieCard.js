import React from 'react';
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const MovieCard = ({el}) => {

    return (
        <div className='card'>
            <Link to={`/movies/movies-detail/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} width={250} alt=""/>
                <div className="card-btn">
                    <button>Смотреть</button>
                </div>
            </Link>
           <div className="card-title">
               <h4>{el.title}</h4>
               <h5>{el.release_date}</h5>
               <p>{el.vote_average}</p>
               <div className='stars'>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiOutlineStar/>
                   <AiOutlineStar/>
               </div>
           </div>
        </div>
    );
};

export default MovieCard;