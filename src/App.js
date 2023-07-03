// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import List from "./Components/pages/list/List";
import Single from "./Components/pages/single/Single";
import New from "./Components/pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./Components/style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Components/context/darkModeContext";

const App = () => {

  const { darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
