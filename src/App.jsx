import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/mainRoutes/Home";
import HouseHoldPopulation from "./pages/mainRoutes/HouseHoldPopulation";
import AgeSexDistribution from "./pages/mainRoutes/AgeSexDistribution";
import PopulationBySector from "./pages/mainRoutes/PopulationBySector";
import PopulationByEthnicGroup from "./pages/mainRoutes/PopulationByEthnicGroup";
import PopulationByReligious from "./pages/mainRoutes/PopulationByReligious";
import SchoolAgeDistribution from "./pages/mainRoutes/SchoolAgeDistribution";
import ElementarySchoolData from "./pages/mainRoutes/ElementarySchoolData";
import DistanceFromSchool from "./pages/mainRoutes/DistanceFromSchool";
import HouseholdTenure from "./pages/mainRoutes/HouseholdTenure";
import PubertyByPurok from "./pages/mainRoutes/PubertyByPurok";
import HouseholdWithIncome from "./pages/mainRoutes/HouseholdWithIncome";
import Agriculture from "./pages/mainRoutes/Agriculture";
import BrgyInfo from "./pages/mainRoutes/BrgyInfo";
import Officials from "./pages/mainRoutes/Officials";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
         
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/brgy-info" element={<BrgyInfo/>} />
            <Route index path="/age-sex-distribution" element={<AgeSexDistribution/>} />
            <Route path="/household-population" element={<HouseHoldPopulation/>} />
            <Route path="/population-sector" element={<PopulationBySector/>} />
            <Route path="/population-ethnic-group" element={<PopulationByEthnicGroup/>} />
            <Route path="/population-religious" element={<PopulationByReligious/>} />
            <Route path="/school-age-distribution" element={<SchoolAgeDistribution/>} />
            <Route path="/elementary-school-data" element={<ElementarySchoolData/>} />
            <Route path="/distance-from-school" element={<DistanceFromSchool/>} />
            <Route path="/household-tenure" element={<HouseholdTenure/>} />
            <Route path="/purok-puberty" element={<PubertyByPurok/>} />
            <Route path="/household-with-income" element={<HouseholdWithIncome/>} />
            <Route path="/agriculture" element={<Agriculture/>} />
            <Route path="/officials" element={<Officials/>} />


            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
