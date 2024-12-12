import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home'; 
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 4000);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
        transition: background-color 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-button {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <Router>
      <div>
        {loading && <Loader />} 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
