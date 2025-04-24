import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: HomeLayout
   }
])