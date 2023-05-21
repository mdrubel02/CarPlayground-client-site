import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Login from "../../User/Login";
import Register from "../../User/Register";
import Blogs from "../../Pages/Blog/Blogs";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AddCategory from "../../Pages/Cetagory/AddCetagorys/AddCategory";
import AllCategory from "../../Pages/Cetagory/AllCategory/AllCategory";
import ProductDetails from "../../Pages/Home/ShortProducts/ProductDetails";
import MyToys from "../../Pages/Cetagory/MyProducts/Mytoys";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([{
    path: '/',
    errorElement:<ErrorPage />,
    element: <Main />,
    children: [
        {path: '/',element:<Home/>},
        {path: '/home',element:<Home/>},
        {path:'/login',element:<Login />},
        {path:'/register',element:<Register/>},
        {path:'/blog',element:<Blogs/>},
        {path: '/addCategory', element: <AddCategory />},
        {path: '/toyShop', element: <AllCategory/>},
        {path: '/myToys', element: <MyToys/>},
        {path:'/productDetails/:id',
        loader:async({params})=>fetch(`https://car-playground-server-site.vercel.app/details/${params.id}`),
        element:<PrivateRoute><ProductDetails /></PrivateRoute>
        }
    ]
}]);
export default router;