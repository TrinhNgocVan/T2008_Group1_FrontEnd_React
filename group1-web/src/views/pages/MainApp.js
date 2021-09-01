

import Sidebar from "../layouts/Sidebar";
import React from 'react';

import Main from "./Main";

import Header from "../layouts/Header";


function App() {
    return (

            <div className="App">
                <Header/>
                <div className="page-content">
                    <Sidebar/>
                    <Main/>
                </div>
            </div>
    );
}
export default App;
