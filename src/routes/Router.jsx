import { createBrowserRouter, Navigate } from "react-router"; // ✅ use 'react-router-dom'
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error/Error";
import MiddleNavbar from "../components/layout-components/MiddleNavbar";
import CategoryNews from './../pages/CategoryNews/CategoryNews';

export const router = createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout />, // ✅ element, not Component
      children: [
         {
            path: "",
            element: <Navigate to="/category/1" replace />
         },
         {
            path: "/category/:id",
            element: <CategoryNews />, // ✅ use element
         },
      ]
   },
   {
      path: "*",
      element: <Error />
   }
]);
