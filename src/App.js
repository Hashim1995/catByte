import "./Assets/Global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./Store/dataSlice";
import axios from "axios";
import Articles from "./Pages/Articles";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      dispatch(setData(res.data.users));
    });
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userSlug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
