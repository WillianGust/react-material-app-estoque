import React from "react";
import Login from "../pages/home";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import App from "../App";

const Router: React.FC = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default Router