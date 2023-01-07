import React from 'react';
import Slider from "react-slick";
import PERSON from "../../img/Blank_Person.jpg"
import {Link} from "react-router-dom";

const CastSlider = ({cast}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {
                    cast.map(el => (

                        <div className="slid">
                           <Link to={`/slid/${el.id}`}>
                               {
                                   el.profile_path ?  <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/> :
                                       <img src={PERSON} width={150} height={175} alt=""/>
                               }
                               <h4>{el.character}</h4>
                               <p>{el.name}</p>
                           </Link>
                        </div>

                    ))
                }
            </Slider>
        </>

    );
};

export default CastSlider;
