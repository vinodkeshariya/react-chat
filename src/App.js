import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./pages/RegistrationForm";
import Profile from "./pages/Profile";
import './style.css'
const App = () => {
  return (
    <>
      <Register />
      <Profile/>
    </>
  );
};

export default App;
