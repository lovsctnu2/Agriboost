import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../layout/LoginPage"
import LandingPage from "../layout/LandingPage"
import EksplorCampaign from "../layout/EksplorCampaign"

import Login from "../pages/LoginPage/Login"
import SignUp from "../pages/LoginPage/SignUp"
import Home from "../pages/Home"
import Header from "../pages/Header"
import About from "../pages/About"
import Footer from "../pages/Footer"
import Kampanye from "../pages/Kampanye";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginPage>
        <Login/>
      </LoginPage>
    ),
  },
  {
    path: "/signUp",
    element: (
      <LoginPage>
        <SignUp/>
      </LoginPage>
    ),
  },
  
  {
    path: "/landing",
    element: (
      <LandingPage>
        <Home/>
        <Header/>
        <About/>
        <Footer/>
      </LandingPage>
    ),
  },

  {
    path: "/Eksplor",
    element: (
      <EksplorCampaign>
        <Kampanye/>
      </EksplorCampaign>
    ),
  }

]);

export default router;