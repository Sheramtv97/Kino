import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API} from "../../lip/Apikei";
import Slider from "react-slick";
const MovieVideos = ({myId}) => {
    const [video,setVideo] = useState([])

    const getVideo = async (id,apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        await setVideo(data.results)
    }

    useEffect(() =>{
        getVideo(myId,API)
    },[])
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <Slider {...settings}>
            {
                video.map(el =>(
                    <div>
                        <iframe width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                ))
            }

        </Slider>
    );
};

export default MovieVideos;