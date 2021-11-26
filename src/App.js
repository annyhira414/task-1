import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import TrainingSchool from './pages/TrainingSchool';
import OurClients from './pages/OurClients';
import Careers from './pages/Careers';
import NewsEvents from './pages/NewsEvents';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about/us' exact component={AboutUs} />
          <Route path='/services' exact component={OurServices} />
          <Route path='/training/school' exact component={TrainingSchool} />
          <Route path='/our/clients' exact component={OurClients} />
          <Route path='/careers' exact component={Careers} />
          <Route path='/news/events' exact component={NewsEvents} />
          <Route path='/contactus' exact component={ContactUs} />
        </Routes>
      </Router>
    </>
  );
}

export default App;