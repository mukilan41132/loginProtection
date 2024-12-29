import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from './SliderImg';
import './MovieSlider.css'
const MovieSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="movie-slider">
            <Slider {...settings}>
                {Movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <h3>{movie.title}</h3>
                        <img src={movie.image} alt={movie.title} className="movie-image" />

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieSlider;
