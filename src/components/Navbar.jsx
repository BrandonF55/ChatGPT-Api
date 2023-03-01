import React from "react";
import { NavLink } from 'react-router-dom';
import '../Styles/ChatGPTStyles.css'



function Navbar(){
    return(
        <nav className="Nav-bar">
            <NavLink to="/" alt="home" title="home">
                Home
            </NavLink>
            
            <NavLink to="/DogApi" alt="DogApi" title="DogApi" >
                Dog Api
            </NavLink>
            <NavLink to="/ChatGpt" alt="ChatGpt" title="ChatGpt">
                Knock Off Gpt
            </NavLink>
            <NavLink to="/StarwarsAPI" alt="StarwarsAPI" title="StarwarsAPI">
                StarWarsApi
            </NavLink>
        </nav>
    )
}

export default Navbar;