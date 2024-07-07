import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home/home'

function Routing() {
    return(
        <div>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/" element={<ProtectedRoute Component={Home} />} /> */}
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