import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import ProcessEmails from "./components/ProcessEmails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="process-emails" element={<ProcessEmails />} />
      </Routes>
    </Router>
  );
}

export default App;
