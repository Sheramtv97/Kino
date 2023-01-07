import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

const SliceMovie = ({movie}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <>
            <div className="container">
                <div className="proffil-gen_slider">

                    <Slider {...settings}>
                        {
                            movie.map(el => (
                                el.poster_path ?  <div>
                                       <Link to={`/movies/movies-detail/${el.id}`}>
                                           <img src={` https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt=""/>
                                       </Link>

                                        <p>{el.title}</p>
                                    </div> : ''
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </>

    );
};

export default SliceMovie;