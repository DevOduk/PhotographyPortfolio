import './admin.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Error404 from './pages/404';
import AdminDashboard from './pages/adminDashboard';
import CityUrbanPhotography from './pages/cityurban';
import LandscapePhotography from './pages/landscape';
import CarsPhotography from './pages/cars';
import EventsPhotography from './pages/events&weddings';
import HumanityPhotography from './pages/people&humanity';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                  <Route index element={<Home />}/>
                  <Route path="/" element={<Home />} />
                  <Route path="/Blogs/" element={<Blogs />} />
                  <Route path="/City-Urban-Photography" element={<CityUrbanPhotography />} />
                  <Route path="/Landscape-Photography" element={<LandscapePhotography />} />
                  <Route path="/Cars-Vehicles-Photography" element={<CarsPhotography />} />
                  <Route path="/events-weddings&couples-Photography" element={<EventsPhotography />} />
                  <Route path="/people-humanity" element={<HumanityPhotography />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<Error404 />} />
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App;
