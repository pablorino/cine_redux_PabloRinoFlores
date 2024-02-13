import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/slices/moviesThunks';
import { Link } from 'react-router-dom';

const MovieSlider = () => {
    const dispatch=useDispatch()
    const {movies}=useSelector(state=>state.movies)
    useEffect(()=>{
        dispatch(getMovies())
    }, [])


    const settings = {
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '60px',
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                <div key={movie.imdb_id} className="relative scale-100 hover:scale-110 hover:shadow hover:z-10 transition-transform duration-300 mb-10 mt-10" >
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className="w-full h-auto transition-transform transform "
                    />
                    <div className=' opacity-0 hover:opacity-100 transition-opacity h-full w-full'>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                            <h3 className="text-lg font-bold">{movie.title}</h3>
                            <p className="text-sm">{movie.overview}</p>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </Slider>
    );
};

export default MovieSlider;
