
import './Home.scss'
import MainBanner from '../MainBanner/MainBanner';
import Slider from "react-slick";
import PreFigures from './PreFigures';

import PreCharacters from './PreCharacters';
import Dropmenu from './MenuDrop/Dropmenu';
import { useEffect, useRef } from 'react';
import ImgSection from '../Admin/DisplayAdd/ImgSection';
import PreAnimeExclusive from './PreAnimeExclusive';


const Home = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000,     // Set the interval to 3 seconds
        pauseOnHover: true,      // Pause autoplay when hovered
        pauseOnFocus: true,      // Pause autoplay when the slider is in focus
    };

    return (

        <>
            <MainBanner
                settings={settings}
            />

            <PreFigures />
            <PreCharacters />
            <PreAnimeExclusive />


        </>
    )
}
export default Home;