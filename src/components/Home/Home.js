
import './Home.scss'
import BuyAlotTour from '../BuylotTour/BuyAlotTour';


import MainBanner from '../MainBanner/MainBanner';
import Slider from "react-slick";
import PreFigures from './PreFigures';
import Banner from './Banner/Banner';
import PreCharacters from './PreCharacters';
import Dropmenu from './MenuDrop/Dropmenu';
import AnimeExclusive from './AnimeExclusive';
const Home = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,

        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the speed to 3 seconds (3000 ms)
    };
    console.log("Slider settings:", settings)
    return (

        <>
            <Banner />
            <Dropmenu />
            <MainBanner
                settings={settings}
            />
            <PreFigures />
            <PreCharacters />
            <AnimeExclusive />


        </>
    )
}
export default Home;