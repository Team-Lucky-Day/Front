import "./App.css";
import Main from "./Main/Main";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Login_SignUp/AuthPage";
import FindPw from "./Login_SignUp/Login/FindPw";
import Menu from "./Menu/App";
import FavoritesMenu from "./Favorites_Menu/FavoritesMenu";
import Mypage from "./Mypage/Mypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Login" element={<AuthPage />} />

      <Route path="/Seat" />
      <Route path="/FavoritesMenu" element={<FavoritesMenu />} />
      <Route path="/FindPw" element={<FindPw />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Mypage" element={<Mypage />} />
    </Routes>
  );
}

export default App;
