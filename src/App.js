import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './Pages/Booking';
import 'react-toastify/dist/ReactToastify.css';
import Book from './Pages/Book';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Booking />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/book' element={<Book />} />
            <Route path='/details' element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
