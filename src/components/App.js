import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import '../Static/CSS/App.css'

function App() {
  return (
    
        <div>
          <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
          </Routes>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    {<UpdateProfile/>}
                  </PrivateRoute>
                } />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
              </Routes>
            </AuthProvider>
            <Footer />
          </Router>
        </div>
     
    
  );
}

export default App;
