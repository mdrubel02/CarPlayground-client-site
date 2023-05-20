import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Login from "../../User/Login";
import Register from "../../User/Register";
import Blogs from "../../Pages/Blog/Blogs";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AddCategory from "../../Pages/Cetagory/AddCetagorys/AddCategory";
import AllCategory from "../../Pages/Cetagory/AllCategory/AllCategory";



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
        {path: '/toyShop', element: <AllCategory/>}
    ]
}]);
export default router;