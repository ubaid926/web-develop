import { Route, Routes, BrowserRouter } from "react-router-dom"
import AppHome from "../pages/home";
import AppProfile from "../pages/profile";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<AppHome/>}/>
                <Route path="/profile" element={<AppProfile/>}/>
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter;