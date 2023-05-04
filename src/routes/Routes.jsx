import { createBrowserRouter } from "react-router-dom";
import Main from "../layout's/Main";
import Home from "../pages/Home/Home";
import BlogPage from "../pages/BlogPage/BlogPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ChefRecipe from "../pages/ChefRecipesPage/ChefRecipes";
import AboutUs from "../pages/AboutUsPage/AboutUs";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
        path:'/recipes/:id',
        element:<PrivetRoute><ChefRecipe></ChefRecipe></PrivetRoute>,
        loader: ({params}) => fetch(`https://food-city-server-hridoy-shill.vercel.app/recipes/${params.id}`)
    },

    {
        path:'/blog',
        element:<BlogPage></BlogPage>
    },

    {
        path:'/about',
        element: <AboutUs></AboutUs>
    }
    
])

export default router;