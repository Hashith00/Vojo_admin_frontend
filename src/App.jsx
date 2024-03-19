
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RiderListPage from "./pages/riderListPage";
import LandingPage from "./pages/landing";
import RealDashboard from "./pages/Realdash";
import RiderDetails from "./pages/riderDetails";
import AdminProfiles from "./pages/Profiles";
import HotelListPage from "./pages/hotelListPage";
import Stats from "./components/stat";
import SignInAccount from "./components/Sign_In_Account";
import PaymentsPage from "./pages/PaymentsPage";
import RiderPaymentsPage from "./pages/riderPaymentsPage";
import HotelPaymentsPage from "./pages/hotelPaymentsPage";
import UserPaymentsPage from "./pages/userPaymentsPage";
import HotelDetailsPage from "./pages/hotelDetailsPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<RealDashboard />}></Route>
        <Route path="/riderList" element={<RiderListPage/>}></Route>
        <Route path="/riderDetails" element={<RiderDetails />}></Route>
        <Route path="/hotelDetails" element={<HotelDetailsPage />}></Route>
        <Route path="/adminProfiles" element={<AdminProfiles/>}></Route>
        <Route path="/hotelList" element={<HotelListPage/>}></Route>
        <Route path="/stats" element={<Stats/>}></Route>
        <Route path="/signinaccounts" element={<SignInAccount/>}></Route>
        <Route path="/riderpayments" element={<RiderPaymentsPage/>}></Route>
        <Route path="/hotelpayments" element={<HotelPaymentsPage/>}></Route>
        <Route path="/userpayments" element={<UserPaymentsPage/>}></Route>
        <Route path="/payments" element={<PaymentsPage/>}></Route>
        

       
        
        

      </Routes>
    </>
  );
}

export default App;
//testing Comment for git hub