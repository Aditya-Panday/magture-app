<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginPage/Login';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import GetVerificationCode from './Components/VerificationPages/GetVerificationCode';
import VerifyCode from './Components/VerificationPages/VerifyCode';


=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import AdminDashboard from "./Components/AdminPanel/AdminDashboard";
import NotFound from "./Components/NotFound/NotFound";
>>>>>>> 07d693ec7735bd51c6578fd92f41ff95c0e88169

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getVerificationCode" element={<GetVerificationCode />} />
        <Route path="/changePassword" element={<VerifyCode />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
