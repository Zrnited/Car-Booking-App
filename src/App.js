import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './Pages/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
