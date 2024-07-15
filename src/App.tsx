import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";
import Home from "./pages/Userdashboard/Home/Home";
import MyBilling from "./pages/Userdashboard/MyBilliing/MyBilling";
import Setting from "./pages/Userdashboard/Setting/Setting";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="marginTop"></div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/reset-password" element={<RecoverPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/billing" element={<MyBilling />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
