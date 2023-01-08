import { Frame, withSounds, withStyles } from "arwes";

import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";
import useRockets from "../hooks/useRockets";
import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Launch from "../Launch Page/Launch";
import History from "./History/History";
import Upcoming from "./Upcoming/Upcoming";
import Home from "./Home/Home";
import MyGlobe from "../components/MyGlobe";
import PlanetForm from "./Planet Form/PlanetForm";
import RocketForm from "./Rocket Form/RocketForm";
import Dashboard from "./Dashboard/Dashboard";
import AdminLogin from "./Auth/AdminLogin";
import UserHomePage from "../User Pages/Home/UserHomePage";
import Articles from "../User Pages/Articles/Articles";
import ArticleDetails from "../User Pages/Articles/ArticleDetails";
import GhadaShehata from "./Cringat/GhadaShehata";
import Carmen from "./Cringat/Carmen";
import useArticles from "../hooks/useArticles";
const Imports = {
  usePlanets,
  useLaunches,
  useRockets,
  Centered,
  Header,
  Footer,
  Launch,
  History,
  Upcoming,
  Home,
  MyGlobe,
  PlanetForm,
  RocketForm,
  Dashboard,
  AdminLogin,
  UserHomePage,
  Articles,
  ArticleDetails,
  GhadaShehata,
  Carmen,
  useArticles,
};
export default Imports;
