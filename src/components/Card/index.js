import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import mainBubble from './assets/Bubble_main.svg'

const Card = () => {

    const [ModalClose, setModalClose] = useState(true);

    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }


    return (
        <div  >


            <div class="container border shadow-lg w-full rounded-3xl overflow-hidden bg-white relative" onMouseEnter={() => handleModalClose()} onMouseLeave={() => handleModalClose()} >

                <div className={ModalClose ? 'hidden anim' : 'anim absolute flex flex-col w-full h-full justify-center PortCard '}>


                    <div class="grid grid-cols-2 place-items-center mt-20 ">

                    <a href="https://stackoverflow.com/questions/31095759/react-router-redirect-to-a-different-domain-url">
                        <div class="flex flex-col bothBubbles ">
                            <div class="m-auto w-full h-full  flex flex-row parentBubblePort">

                                <img class="w-1/2 h-1/2 PortBubble" src={mainBubble} alt="mainBubble1" />

                                <svg class="w-1/2 h-1/2 iconPort" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>

                            </div>
                            <div class="PortWord flex justify-center">
                                <h3 class=" border-2 px-3 py-1  rounded-full text-sm text-center text-white font-medium ">View Repo</h3></div>
                        </div> </a>

<a>
                        <div class="flex flex-col">
                            <div class="m-auto w-full h-full  flex flex-row parentBubblePort">

                                <img class="w-1/2 h-1/2 PortBubble" src={mainBubble} />

                                <svg class="w-1/2 h-1/2 iconPort" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d="M12 0c-1.326 0-2.597.22-3.787.613 4.94-1.243 8.575 1.72 11.096 5.606 1.725 2.695 2.813 2.83 4.207 2.412A11.956 11.956 0 0012 0zM7.658 2.156c-1.644.019-3.295.775-4.931 2.207A11.967 11.967 0 000 12c.184-2.823 2.163-5.128 4.87-5.07 2.104.044 4.648 1.518 7.13 5.289 4.87 7.468 10.917 5.483 11.863 1.51.081-.566.137-1.14.137-1.729 0-.176-.02-.347-.027-.521-1.645 1.725-4.899 2.35-8.264-2.97-2.59-4.363-5.31-6.383-8.05-6.353zM3.33 13.236c-1.675.13-2.657 1.804-2.242 3.756A11.955 11.955 0 0012 24c4.215 0 7.898-2.149 10.037-5.412v-.043c-2.836 3.49-8.946 4.255-13.855-2.182-1.814-2.386-3.544-3.228-4.852-3.127Z" /></svg>

                            </div>
                            <div class="PortWord flex justify-center">
                                <h3 class=" border-2 px-3 py-1  rounded-full text-sm text-center text-white font-medium ">Visit Demo</h3></div>
                        </div> </a></div>

                    <h3 class="my-3 text-white ml-4"> Technologies Used: </h3>


                    <div class="flex flex-wrap justify-evenly mx-4 ">


                        <div class="inline-flex items-center border-2 m-auto px-3  my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">Woraaaaald</div>
                        <div class="border-2 m-auto px-3 py-2 my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">Woraaasld</div>
                        <div class="border-2 m-auto px-3 py-2 my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">Worasdaaald</div>
                        <div class="border-2 m-auto px-3 py-2 my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">Woraalasd</div>
                        <div class="border-2 m-auto px-3 py-2 my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">Woraasdasdald</div>


                    </div>

                </div>

                <div class="w-full">
                    <img src="https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png" alt="gif" class="w-full object-cover" /></div>





                <div class="container-content p-4">
                    <div class="flex justify-between items-center pb-1">
                        <p class="font-semibold">Singapore, Michigan</p>
                    </div>
                </div>
                <p class="px-4 mb-6"> GThere's a ghost town, Singapore, buried under the Saugatuck sand dunes in Michigan. After the Great Michigan Fire, much of the trees protecting the city from the harsh winds of Lake Michigan were cut down. The combination of winds and sand eroded the buildings, until they were buried.</p>
                <br />


            </div>

        </div>


    );
}

export default Card;
