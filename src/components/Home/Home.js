
import './Home.scss'
import BuyAlotTour from '../BuylotTour/BuyAlotTour';
import Banner from './Banner';
import Dropmenu from './Dropmenu';
import MainBanner from '../MainBanner/MainBanner';
import Slider from "react-slick";
import PreFigures from './PreFigures';
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
            <BuyAlotTour />

        </>
    )
}
export default Home;