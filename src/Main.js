import { Routes, Route } from "react-router-dom";

import LoginRegister from "./views/components/login/Login";
import RequireAuth from "./auth/RequireAuth";
import Home from "./views/components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
