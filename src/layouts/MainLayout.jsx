import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = () => {
  const location = useLocation(); // Get the current location

  // Conditionally set isLoginPage based on the pathname
  const isLoginPage = location.pathname === "/";
  return (
    <>
      <Navbar isLoginPage={isLoginPage} />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
