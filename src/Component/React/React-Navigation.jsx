import React from "react";
import { useState } from "react";
import {FiArrowLeft} from 'react-icons/fi';
import Intro from "./React Intro";
import Checkbox from "./React Checkbox";

const ReactNav = () => {
    const [isOpen, setisOpen] = useState(false);
    const [showpage,setshowpage] = useState(null);

    const RenderPage = () => {
        switch(showpage){
            case 'Checkbox':
            return <Checkbox/>
        

            default:
          return (
            <Intro/>
        )   
        }
    }


   return (
    <div className="flex mt-16">

                <button
                  className="bg-gray-200 text-2xl px-3 fixed top-16 left-4 z-50 sm:hidden"
                  onClick={() => setIsOpen(!isOpen)}>
                  <i className="fas fa-bars"></i>
                </button>
        

                 {/* Sidebar */}
                <div className={`lg:sticky lg:left-0 lg:top-16 w-56 fixed h-[calc(100vh-4rem)] overflow-y-auto 
                                 bg-gray-200 px-5 py-6 shadow-lg z-40 transform transition-transform
                                   duration-300 sm:translate-x-0 sm:block
                                   ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                                 >  


                   <h1 className="text-xl font-semibold mt-5 mb-2">JS Statements</h1>
                   <ul className='space-y-2 text-sm'>  
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('Checkbox')}>React Chechbox</li>
                    </ul>
                </div>




                 <div className={`transition-all duration-300 p-4 w-full
                                      ${isOpen ? "sm:ml-64" : "sm:ml-0"}`}>
                                      {showpage &&(
                                        <button onClick={() => setshowpage(null)}
                                         className='flex items-center mb-4 bg-green-300 px-4
                                         py-2 text-white rounded text-sm mt-10'>
                                          <FiArrowLeft/>
                                          Back
                                        </button>
                                      )}
                                      {RenderPage()}
                     
                                    </div>                 



    </div>

   )

}

export default ReactNav;