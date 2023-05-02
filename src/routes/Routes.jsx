import { createBrowserRouter } from "react-router-dom";
import Main from "../layout's/Main";
import Home from "../pages/Home/Home";
import BlogPage from "../pages/BlogPage/BlogPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'/login',
        element:<LoginPage></LoginPage>
    },
    {
        path:'/register',
        element:<RegisterPage></RegisterPage>
    },
    {
        path:'/blog',
        element:<BlogPage></BlogPage>
    }
    
])

export default router;