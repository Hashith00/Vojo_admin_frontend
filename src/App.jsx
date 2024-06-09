
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RiderListPage from "./pages/riderListPage";
import LandingPage from "./pages/landingPage";
import Dashboard from "./pages/dashBoard";
import RiderDetails from "./pages/riderDetails";
import AdminProfiles from "./pages/Profiles";
import HotelListPage from "./pages/hotelListPage";
import Stats from "./components/stat";
import SignInAccount from "./components/Sign_In_Account";
import Bookings from "./components/bookings";
import PaymentsPage from "./pages/PaymentsPage";
import RiderPaymentsPage from "./pages/riderPaymentsPage";
import HotelPaymentsPage from "./pages/hotelPaymentsPage";
import UserPaymentsPage from "./pages/userPaymentsPage";
import HotelDetailsPage from "./pages/hotelDetailsPage";
import UserListPage from "./pages/userListPage";
import CommnentPage from "./pages/comments";
import JourneyPage from "./pages/journeys";
import ChatApp from "./pages/chat";
import CurrentjourneyPage from "./pages/currentjourneyPage";
import UpcomingJourneyPage from "./pages/upcomingJourneyPage";
import PastJourneyPage from "./pages/pastJourneyPage";
import BookingJourneyPage from "./pages/bookingJouneys";
import TripJourneyPage from "./pages/tripJourneys";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/riderList" element={<RiderListPage/>}></Route>
        <Route path="/riderDetails" element={<RiderDetails />}></Route>
        <Route path="/hotelDetails" element={<HotelDetailsPage />}></Route>
        <Route path="/adminProfiles" element={<AdminProfiles/>}></Route>
        <Route path="/hotelList" element={<HotelListPage/>}></Route>
        <Route path="/bookings" element={<BookingJourneyPage/>}></Route>
        <Route path="/trips" element={<TripJourneyPage/>}></Route>
        <Route path="/stats" element={<Stats/>}></Route>
        <Route path="/signinaccounts" element={<SignInAccount/>}></Route>
        <Route path="/riderpayments" element={<RiderPaymentsPage/>}></Route>
        <Route path="/hotelpayments" element={<HotelPaymentsPage/>}></Route>
        <Route path="/userpayments" element={<UserPaymentsPage/>}></Route>
        <Route path="/payments" element={<PaymentsPage/>}></Route>
        <Route path="/userList" element={<UserListPage/>}></Route>
        <Route path="/comments_and_reviews" element={<CommnentPage/>}></Route>
        <Route path="/currentjourneys" element={<CurrentjourneyPage/>}></Route>
        <Route path="/upcomingjourneys" element={<UpcomingJourneyPage/>}></Route>
        <Route path="/pastjourneys" element={<PastJourneyPage/>}></Route>
        <Route path="/journeyList" element={<JourneyPage/>}></Route>
        <Route path="/chat" element={<ChatApp/>}></Route>

      </Routes>
    </>
  );
}

export default App;
//testing Comment for git hub