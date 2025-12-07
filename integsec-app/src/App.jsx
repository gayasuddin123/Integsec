import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
import FreeCourses from "./pages/FreeCourses";
import TrainingPlacement from "./pages/TrainingPlacement";
import Certificate from "./pages/Certificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import Blog from "./pages/Blog"; // Add this
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/free-courses" element={<FreeCourses />} />
        <Route path="/training-placement" element={<TrainingPlacement />} />
        <Route path="/training/certificate" element={<Certificate />} />
        <Route path="/training/verify" element={<VerifyCertificate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
