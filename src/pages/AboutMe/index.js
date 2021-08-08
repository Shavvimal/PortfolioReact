import React, {useEffect, useRef} from 'react';
import './style.css'
import {  } from "./assets/animate.js"




const AboutMe = () => {
   

    return (

<div id="AboutSect" class="bg-white raleway  my-20">

  <div class="w-full flex flex-wrap">
{/*  <!-- Section Left --> */}
    <div class="w-full pt-10 bg-red md:w-2/3 flex flex-col border">

      <div id="left" class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-44">
        <h1 class="bodyheadercol text-left text-4xl font-extrabold">About Me</h1>
                        <h2 class="text-left text-2xl py-3 italic" > I Live by Overcoming Challenges, Continuously Learning & Creating  </h2>
                        <p class="text-left text-xl"> I decided to pursue a career in software development (having graduated with a First Class Honours in Chemical Engineering) after I tried my hand at using Python while training my own StyleGAN to artificially generate artwork. As someone who loves to paint, I value creativity and attention-to-detail in everything I do, and Software engineering is the perfect creative outlet that values and leverages these skills, but also the analytical, interpersonal, technical and problem-solving skills I have honed during my time as an engineer. In the future I aspire to work with the latest tech, helping to innovate and create high-quality and revolutionary apps, projects, products and services. Aside from programming and painting, I love to dance, hit the gym, complete obstacle courses, and manage my investment portfolio.
                            <br></br><br></br> 
                            Currently, I am training with futureproof to upskill as a Full Stack Developer in order to kick-start my career in Software Engineering. I’m excited to be transitioning from coding as a hobby to becoming a valuable part of a team that builds innovative software products to meet user needs.

                        </p>
        
        
        </div>
</div>
    {/* <!-- Section Right--> */}
    <div class="w-1/3 gradient md:px-24 border"> <p class="text-center text-4xl">Image Here</p> </div>
    
</div></div>

    )


}

export default AboutMe;
