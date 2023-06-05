import "./App.css";
import Main from "./Main/Main";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Login_SignUp/AuthPage";
import FindPw from "./Login_SignUp/Login/FindPw";
import AppAdmin from "./Admin/App";
import Menu from "./Menu/App";
import FavoritesMenu from "./Favorites_Menu/FavoritesMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Admin" element={<AppAdmin />} />
      <Route path="/Login" element={<AuthPage />} />

      <Route path="/Seat" />
      <Route path="/FavoritesMenu" element={<FavoritesMenu />} />
      <Route path="/FindPw" element={<FindPw />} />
      <Route path="/Menu" element={<Menu />} />
      {/* <Route path="/Seat" element={<Seat />} /> */}
    </Routes>
  );
}

export default App;
