import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about/About.jsx";
import Ditel from "./pages/home/Ditel.jsx";



export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/ditel/:id",
                element:<Ditel/>
            } 
        ]
    }
])