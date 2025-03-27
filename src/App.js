import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './styles/header.css';

// Lazy load pages for performance
const Homepage = lazy(() => import('./components/Homepage'));
const About = lazy(() => import('./components/About'));
const Academics = lazy(() => import('./components/Academics'));
const Admissions = lazy(() => import('./components/Admissions'));
const NewsEvents = lazy(() => import('./components/NewsEvents'));
const Gallery = lazy(() => import('./components/Gallery'));
const StudentLife = lazy(() => import('./components/StudentLife'));
const Contact = lazy(() => import('./components/Contact'));

// Custom Loader Component with spinner animation
const Loader = () => (
  <div className="loader">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    // Add basename so that all routes are relative to "/new-lf-frontend"
    <Router basename="/new-lf-frontend">
      <div className="app-container">
        <Header />
        <Suspense fallback={<Loader />}>
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
