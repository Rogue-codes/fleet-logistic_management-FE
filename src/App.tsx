import {BrowserRouter as Router  , Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Wrapper from "./components/wrapper/Wrapper";
import Dashboard from "./pages/dashboard/Dashboard";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/login" element={<PublicRoute/>}>
            <Route path="/login" element={<Login/>} />
          </Route>

          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/" element={<Wrapper/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
          </Route>
        </Routes>
        <SnackbarProvider />
      </Router>
    </main>
  );
}

export default App;
