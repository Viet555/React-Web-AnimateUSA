import { Route, Routes } from "react-router-dom";
import Login from "../components/Header/Login/Login";
import Home from "../components/Home/Home";
import IntroDuce from "../components/IntroDuce";
import Header from "../components/Header/Header";
import New from "../components/New/New";
import BuyAlotTour from "../components/BuylotTour/BuyAlotTour";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/IntroDuce" element={<IntroDuce />} />
                <Route path="/New" element={<New />} />
                <Route path="/TourbestSell" element={<BuyAlotTour />} />
            </Routes>

        </>
    )
}
export default AppRoutes;