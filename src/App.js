import "./App.css";
import Main from "./Main/Main";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Login_SignUp/AuthPage";
import FindPw from "./Login_SignUp/Login/FindPw";
import Menu from "./Menu/App";
import FavoritesMenu from "./Favorites_Menu/FavoritesMenu";
import Mypage from "./Mypage/Mypage";
import Admin from "./Admin/App";
import AdminLogin from './Admin/AdminLogin'
import Payment from "./Payment/Payment";
import Seat from "./Seat/Seat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Login" element={<AuthPage />} />
      <Route path="/FavoritesMenu" element={<FavoritesMenu />} />
      <Route path="/FindPw" element={<FindPw />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Seat" element={<Seat />} />
      <Route path="/Mypage" element={<Mypage />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
