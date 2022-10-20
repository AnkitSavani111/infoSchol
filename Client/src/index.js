import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Scholarships from './Components/Scholarships';
import ScholDetails from './Components/ScholDetails';
import Homepage from './Components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/scholarships" element={<Scholarships/>} />
            <Route path="/scholarships/:_id" element={<ScholDetails/>}/>
            </Route>
    </Routes>
  </BrowserRouter>
);