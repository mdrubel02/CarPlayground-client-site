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
        loader:async({params})=>fetch(`http://localhost:5000/details/${params.id}`),
        element:<ProductDetails />
        }
    ]
}]);
export default router;