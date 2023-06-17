import { Routes, Route } from "react-router-dom";

import LoginRegister from "./views/components/login/Login";
import TopNavBar from "./views/layout";
import ChartDashboard from "./views/components/dashboard/index";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/" element={<ChartDashboard />} />
      </Routes>
    </>
  );
}

export default App;
