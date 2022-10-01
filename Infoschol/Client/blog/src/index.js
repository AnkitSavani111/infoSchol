import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import Scholarships from './Components/Scholarships';
import ScholDetails from './Components/ScholDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/scholarships" element={<Scholarships/>} />
            <Route path="/scholarships/:_id" element={<ScholDetails/>}/>
            </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
