import React, {useState} from 'react';
import './App.css'
import Nav from "./Nav.jsx";
import {Routes, Route} from "react-router-dom";
import Projet from "./Projet.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";

function App() {
    let [isMenuOpen, setMenuOpen] = useState(false);

    let toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/projet"} element={<Projet/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>

        </>


);

}

export default App;
