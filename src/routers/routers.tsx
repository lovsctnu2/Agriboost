import { createBrowserRouter } from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/LoginPage/Login"
import SignUp from "../pages/LoginPage/SignUp"
import Verify from "../pages/Verify"
import MainLayout from "../layout/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Login/>
      </MainLayout>
    ),
  },
  {
    path: "/signUp",
    element: (
      <MainLayout>
        <SignUp/>
      </MainLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <MainLayout>
        <Home/>
      </MainLayout>
    ),
  },
  {
    path: "/Verify",
    element: (
      <MainLayout>
        <Verify/>
      </MainLayout>
    ),
  },
]);

export default router;