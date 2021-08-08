import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"
import mainBubble from './assets/Bubble_main.svg'



const Contact = () => {


    return (
        <>    <a id="contactsect" ></a>
<div class="w-full flex-col bg-svg rounded-t-full py-10 mt-96 ">

            <div id="contact-card" class=" absolute container border shadow-xl m-1 w-5/6 lg:w-1/3 rounded-xl overflow-hidden mt-10 m-auto bg-white  relative">
                <div class="container-content p-10 lg:p-20">

                    <h1 class="bodyheadercol text-left text-4xl font-extrabold">Contact Me</h1>
                    <h2 class="text-left text-2xl py-3 italic" > Please drop a message to say hello and get in touch! I‘d love to hear from you.  </h2>


                    <form class="flex flex-col ">
                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-left text-xl">Name:</label>
                        <input class=" text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="name" type="text" placeholder="Shav"  />
                    </div>

                    <div class="flex flex-col pt-6">
                        <label for="email" class="text-left text-xl">Email:</label>
                        <input class=" text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="email" type="email" placeholder="Shav@example.com"  />
                    </div>

                    <div class="flex flex-col pt-6 ">
                        <label for="message" class="text-left text-xl">Message:</label>
                        <textarea class=" h-96 text-xl shadow border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-blue-400 transition-all duration-500
                        focus:border" name="message" type="text" placeholder="Hello!"  />
                    </div>
 
                    <input class=" text-white bg-custom rounded-full focus:bg-purple-700 w-auto px-28 font-bold text-lg p-2 mt-8" name="message" type="submit" value="Get In Touch"  />


                    </form>

                </div> </div> 
                
                {/* <div class="border-6">
                <img class="w-full h-full object-cover" src={mainBubble} alt="mainBubble1"/>
                </div>
                 */}
                </div>



        </>
    )


}

export default Contact;