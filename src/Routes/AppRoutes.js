import { Route, Routes } from "react-router-dom";
import Login from "../components/Header/Login/Login";
import Home from "../components/Home/Home";
import IntroDuce from "../components/IntroDuce";
import Header from "../components/Header/Header";
import New from "../components/New/New";
import BuyAlotTour from "../components/BuylotTour/BuyAlotTour";
import Register from "../components/Header/Login/Register";
import ImgSection from "../components/Admin/DisplayAdd/ImgSection";

import { ROUTE } from "../constant";
import DetailProduct from "../components/Home/DetailProduct/DetailProduct";
import ManagerUser from "../components/Admin/ManagerUser/ManagerUser";
import ManagerProduct from "../components/Admin/ManagerProduct/ManagerProduct";
import MarkDownProduct from "../components/Admin/MarkDown/MarkDownProduct";
import TableManagerProduct from "../components/Admin/TableManagerProduc/TableManagerProduct";
import AdminManager from "../components/Admin/AdminProduct";
import NewArrivals from "../components/Home/NewArrial/NewArrivals";
const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/IntroDuce" element={<IntroDuce />} />
                <Route path="/New" element={<New />} />
                <Route path="/TourbestSell" element={<BuyAlotTour />} />
                <Route path={ROUTE.MANAGER_PRODUCT} element={<AdminManager />} />

                <Route path={ROUTE.DETAIL} element={<DetailProduct />} />
                <Route path={ROUTE.MANAGE_USER} element={<ManagerUser />} />

                <Route path={ROUTE.NEW_ARRIVALS} element={<NewArrivals />} />



            </Routes>

        </>
    )
}
export default AppRoutes;