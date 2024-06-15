import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginPage/Login';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
