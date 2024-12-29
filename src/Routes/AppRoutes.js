import { Route, Routes } from "react-router-dom";
import Login from "../components/Header/Login/Login";
import Home from "../components/Home/Home";
import IntroDuce from "../components/IntroDuce";
import Header from "../components/Header/Header";
import New from "../components/New/New";

import Register from "../components/Header/Login/Register";
import ImgSection from "../components/Admin/DisplayAdd/ImgSection";

import { ROUTE } from "../constant";
import DetailProduct from "../components/Home/DetailProduct/DetailProduct";
import ManagerUser from "../components/Admin/ManagerUser/ManagerUser";
import ManagerProduct from "../components/Admin/ManagerProduct/ManagerProduct";
import MarkDownProduct from "../components/Admin/MarkDown/MarkDownProduct";
import TableManagerProduct from "../components/Admin/TableManagerProduc/TableManagerProduct";
import AdminManager from "../components/Admin/AdminProduct";
import NewArrivals from "../components/Home/MenuDrop/NewArrial/NewArrivals";
import AnimeExclusive from "../components/Home/MenuDrop/AnimeExclusive/AnimeExclusive";
import PreOrder from "../components/Home/MenuDrop/PreOrder/PreOrder";
import Blog from "../components/Home/Blog/Blog";
import FaqManager from "../components/Admin/HelpManger.js/Faq";
import Faq from "../components/Help/Faq";
import Contact from "../components/Help/Contact";

const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/IntroDuce" element={<IntroDuce />} />
                <Route path="/New" element={<New />} />

                <Route path={ROUTE.MANAGER_PRODUCT} element={<AdminManager />} />

                <Route path={ROUTE.DETAIL} element={<DetailProduct />} />
                <Route path={ROUTE.MANAGE_USER} element={<ManagerUser />} />

                <Route path={ROUTE.NEW_ARRIVALS} element={<NewArrivals />} />
                <Route path={ROUTE.ANIME_EXCLUSIVE} element={<AnimeExclusive />} />
                <Route path={ROUTE.PRE_ORDERS} element={<PreOrder />} />


                <Route path={ROUTE.BLOG} element={<Blog />} />

                <Route path={ROUTE.MANAGER_FAQ} element={<FaqManager />} />
                <Route path={ROUTE.FAQ_CONTENT} element={<Faq />} />
                <Route path={ROUTE.CONTACT} element={<Contact />} />
            </Routes>

        </>
    )
}
export default AppRoutes;