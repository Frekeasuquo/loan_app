// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import List from "./Components/pages/list/List";
import Single from "./Components/pages/single/Single";
import New from "./Components/pages/new/New";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
