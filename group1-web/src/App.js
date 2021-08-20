
import './App.css';
import Sidebar from "./views/pages/Sidebar";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Main from "./views/pages/Main";
import Footer from "./views/layouts/Footer";

// lazy import
// const Footer = React.lazy(() => import('./views/layouts/Footer'))

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Sidebar/>
        <Main/>
        <Footer/>
    </div>
   </BrowserRouter>
  );
}
export default App;
