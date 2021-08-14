import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { } from "./assets/animate.js"
import { Card } from '../../components';
import { Switch, Route } from 'react-router-dom';


const Portfolio = () => {

  const [ModalClose, setModalClose] = useState(false);

  const handleModalClose = () => {
    setModalClose(!ModalClose)
  }



  return (<><a class="mb-10" id="portfoliosect" ></a>



    <div id="portfolio" class="flex flex-col justify-center md:justify-start pt-8 md:pt-12 px-8 md:px-24  lg:px-44 h-auto ">
      <h1 class="bodyheadercol text-left text-4xl font-extrabold">My Portfolio</h1>
      <h2 class="text-left text-2xl py-3 italic" > Please feel free to check out some of my work! </h2>
      <div class="">
        <NavLink to="/Portfolio/Web" activeClassName="current  ">Web</NavLink>
        <NavLink to="/Portfolio/Graphic" activeClassName="current">Graphic</NavLink> </div>
      <div class="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 w-auto h-auto pt-8 p-4 ">
        <Switch>
          <Route exact path="/"><Card /></Route>
          <Route path="/Portfolio/Web">
            
          <Card />  
            <Card /> 
            
            
            </Route>
          <Route path="/Portfolio/Graphic">
            
            
            <Card />  
            <Card />  
            <Card />  
            <Card />  
            <Card />  
            <Card />  
            
            
            
            </Route>
        </Switch>

      </div>

    </div>


  </>
  )


}

export default Portfolio;
