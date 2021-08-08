import React, {useEffect, useRef} from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import {  } from "./assets/animate.js"




const Portfolio = () => {
   

    return (



      <div id="portfolio" class=" border flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-44 h-1/2">
        <h1 class="bodyheadercol text-left text-4xl font-extrabold">My Portfolio</h1>
                        <h2 class="text-left text-2xl py-3 italic" > Please feel free to check out some of my work! </h2>
                        <div class="flex">
                        <NavLink to="/Portfolio/Web" activeClassName="current  ">Web</NavLink>
                    <NavLink to="/Portfolio/Graphic" activeClassName="current">Graphic</NavLink> </div>
        
        
        </div>
    )


}

export default Portfolio;
