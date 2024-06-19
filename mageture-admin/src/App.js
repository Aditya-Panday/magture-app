import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginPage/Login';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import GetVerificationCode from './Components/VerificationPages/GetVerificationCode';
import VerifyCode from './Components/VerificationPages/VerifyCode';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getVerificationCode" element={<GetVerificationCode />} />
        <Route path="/changePassword" element={<VerifyCode />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
