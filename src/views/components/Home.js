import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChartDashboard from "./dashboard";
import TopNavBar from "../layout";
import { useAuth } from "../../auth/AuthContext";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <ChartDashboard />
    </>
  );
};

export default Home;
