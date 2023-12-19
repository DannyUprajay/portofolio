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

            {/*<main>*/}
            {/*    <section className="grid grid-cols-1 text-center justify-center items-center  relative">*/}
            {/*        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">*/}
            {/*            <h1 className="font-bold">Portofolio <span>Danny</span></h1>*/}
            {/*            <p>*/}
            {/*                Bonjour, je suis développeur web*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <img*/}
            {/*            src="src/assets/portofolioImg.png"*/}
            {/*            alt="desing anime"*/}
            {/*            className="mx-auto my-4"*/}
            {/*        />*/}
            {/*    </section>*/}
            {/*</main>*/}


        </>


);

}

export default App;
