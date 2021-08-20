
import './App.css';
import Sidebar from "./views/layouts/Sidebar";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Main from "./views/pages/Main";

import Header from "./views/layouts/Header";

// lazy import
// const Footer = React.lazy(() => import('./views/layouts/Footer'))

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <div className="page-content">
        <Sidebar/>
        <Main/>
        </div>
    </div>
   </BrowserRouter>
  );
}
export default App;
