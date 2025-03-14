import { createBrowserRouter } from "react-router-dom";


import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Biodata from "../pages/Biodata"
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
    path: "/landing",
    element: (
      <MainLayout>
        <Landing/>
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
    path: "/biodata",
    element: (
      <MainLayout>
        <Biodata/>
      </MainLayout>
    ),
  },
  {
    path: "/verify",
    element: (
      <MainLayout>
        <Verify/>
      </MainLayout>
    ),
  },
]);

export default router;