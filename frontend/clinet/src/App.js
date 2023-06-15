import "./App.css";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movie";
// import SimpleBottomNavigation from "./components/Mainnav";
import Myprofile from "./Pages/Myprofile/Myprofile";
// import Movieinfo from "./components/Movieinfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/trending" Component={Trending} />
          <Route exact path="/movies" Component={Movies} />
          <Route exact path="/myprofile" Component={Myprofile} />
          <Route exact path="/" Component={Login} />
          <Route exact path="/register" Component={Register} />

          <Route exact path="/search" Component={Search} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
