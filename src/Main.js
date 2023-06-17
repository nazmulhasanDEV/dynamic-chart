import { Routes, Route } from "react-router-dom";

import LoginRegister from "./views/components/login/Login";
import RequireAuth from "./auth/RequireAuth";
import Home from "./views/components/Home";
import NotFound from "./views/components/NotFound";

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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
