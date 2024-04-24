// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import Legal from "./Pages/Legal";
// import NotFound from "./Pages/NotFound";
// import Appointment from "./Pages/Appointment";
// import Dashboard from './Pages/Dashboard';
// // server.js or app.js


// // Connect to MongoDB


// // Other server setup code...



// function App() {
//   return (
//     <div className="App">
//       <Router basename="/Health-Plus">
//         <Routes>
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/" element={<Home />} />
//           <Route path="/legal" element={<Legal />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// ... other imports ...
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Dashboard from "./Pages/Dashboard";
import { AuthContext } from "./context/AuthContext"; // Import AuthContext
import LoginForm from "./Components/LoginForm"; // Import LoginForm component
import RegisterForm from "./Components/RegisterForm"; // Import RegisterForm component



function App() {
  const { isLoggedIn } = React.useContext(AuthContext); // Access context data

  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          {/* Public routes (accessible to anyone) */}
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<LoginForm />} /> {/* Login route */}
          <Route path="/register" element={<RegisterForm />} /> {/* Register route */}
          
          {/* Protected route (requires login) */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
          /> {/* Protected dashboard route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
