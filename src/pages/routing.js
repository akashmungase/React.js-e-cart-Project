import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home'
import Laptops from '../pages/laptops'
import HorizontalNavbar from "../components/layout/Horizontal/horizontalNavbar";

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <HorizontalNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/laptops" element={<Laptops />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/*" element={<Page404 />} /> */}
                    {/* <Route path="/*" element={<Navigate to={'/'} />} /> */}

                    {/* route with param */}
                    {/* <Route path="/user/:name" element={<User />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/navigation" element={<NavigateToURL />} />

                    <Route path="/contact/" element={<Contact />} >

                        <Route path="channel" element={<Channel />} />
                        <Route path="company" element={<Company />} />
                        <Route path="others" element={<Other />} />

                    </Route>
                    <Route path="/useLocation" element={<UseLocation />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;