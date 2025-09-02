import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import WhatisJavaScript from './WhatisJavaScript';
import Introduction from './Introductionofjs';
import FeaturesofJS from './FeaturesofJS';
import JavaScriptVersions from './JavaScriptVersions';
import DiffrencebetweenJavaandJS from './DiffrencebetweenJavaandJS';
import SyntaxofJS from './SyntaxofJS';

const JS = () => {     
  const [isOpen, setisOpen] = useState(false);
  const [showpage,setshowpage] = useState(null);

  const renderpage = () => {
    switch(showpage){
      case 'WhatisJavaScript':
        return <WhatisJavaScript/>
        case 'FeaturesofJS':
          return <FeaturesofJS/>
          case 'JavaScriptVersions':
            return <JavaScriptVersions/>
            case 'DiffrencebetweenJavaandJS':
              return <DiffrencebetweenJavaandJS/>
              case 'SyntaxofJS':
                return <SyntaxofJS/>

        default :
        return (
          <Introduction/>
        )
    }
  }

    return (
        <div className="flex mt-16">
                    {/* Hamburg Butt */}
                  <button
                  className="bg-gray-200 text-2xl px-2 fixed top-16 left-0 z-50 sm:hidden"
                  onClick={() => setisOpen(!isOpen)}>
                  <i className="fas fa-bars"></i>
                </button>  
        
                <div className={`fixed top-16 left-0 w-56 overflow-y-auto h-auto
                               bg-gray-200 px-5 py-6 z-40 transform transition-transform
                                duration-300 shadow-lg sm:translate-x-0 sm:static sm:block 
                                `} >
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Basics</h1>
                    <ul className="space-y-1 text-sm">   
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('WhatisJavaScript')}>What is JavaScript ?</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('FeaturesofJS')}>Features of JavaScript</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('JavaScriptVersions')}>JavaScript Versions</li>  
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('DiffrencebetweenJavaandJS')}>Diffrence between Java and JavaScript</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('SyntaxofJS')}>Syntax of JS</li>
                    <li className='hover:cursor-pointer'>Comment in JS</li>
                    <li className='hover:cursor-pointer'>Variables in JS</li>
                    <li className='hover:cursor-pointer'>Var in JS</li>
                    <li className='hover:cursor-pointer'>Let in JS</li>
                    <li className='hover:cursor-pointer'>Const in JS</li>
                    <li className='hover:cursor-pointer'>Break</li>
                    <li className='hover:cursor-pointer'>Continue</li>
                    <li className='hover:cursor-pointer'>Events</li>
                    <li className='hover:cursor-pointer'>Math</li>
                    <li className='hover:cursor-pointer'>Random</li>
                    <li className='hover:cursor-pointer'>Errors</li>
                    <li className='hover:cursor-pointer'>Scopes</li>
                    <li className='hover:cursor-pointer'>Modules</li>
                    <li className='hover:cursor-pointer'>Hoisting</li>
                    <li className='hover:cursor-pointer'>Spread</li>
                    </ul>


                   <h1 className="text-xl font-semibold mt-5 mb-2">JS Statements</h1>
                   <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>If-else</li>
                      <li className='hover:cursor-pointer'>Switch</li>
                      <li className='hover:cursor-pointer'>Loops</li>
                      <li className='hover:cursor-pointer'>For Loop</li>
                      <li className='hover:cursor-pointer'>While Loop</li>
                      <li className='hover:cursor-pointer'>do-while Loop</li>
                      <li className='hover:cursor-pointer'>For ..of Loop</li>
                      <li className='hover:cursor-pointer'>For ..in Loop</li>
                      <li className='hover:cursor-pointer'>Return</li>
                    </ul>

        
                    <h1 className="text-xl font-semibold mt-5 mb-2">Js Data Types</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>String</li>
                      <li className='hover:cursor-pointer'>Symbol</li>
                      <li className='hover:cursor-pointer'>Number</li>
                      <li className='hover:cursor-pointer'>Null</li>
                      <li className='hover:cursor-pointer'>Boolean</li>
                      <li className='hover:cursor-pointer'>Begingt</li>
                    </ul>


                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Oprator</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>Arithmatic Oprator</li>
                      <li className='hover:cursor-pointer'>Assignment Oprator</li>
                      <li className='hover:cursor-pointer'>Logical Oprator</li>
                      <li className='hover:cursor-pointer'>Comparison Oprator</li>
                      <li className='hover:cursor-pointer'>Conditional Oprator</li>
                      <li className='hover:cursor-pointer'>Nullish Oprator</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Dates</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>JS Date Formats</li>
                      <li className='hover:cursor-pointer'>JS Date Get</li>
                      <li className='hover:cursor-pointer'>JS Date Set</li>
                    </ul>

                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Class</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>JS Classes</li>
                      <li className='hover:cursor-pointer'>JS Class Inheritance</li>
                      <li className='hover:cursor-pointer'>JS Class Static</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Events</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>JS DOM Events</li>
                      <li className='hover:cursor-pointer'>JS Custom Events</li>
                      <li className='hover:cursor-pointer'>JS Event Capturing</li>
                      <li className='hover:cursor-pointer'>JS Event Bubbling</li>
                      <li className='hover:cursor-pointer'>JS Event Delegation</li>
                      <li className='hover:cursor-pointer'>JS Window/Document Events</li>
                      <li className='hover:cursor-pointer'>JS Form Event</li>
                      <li className='hover:cursor-pointer'>JS Keyboard Events</li>
                      <li className='hover:cursor-pointer'>JS Mouse Events</li>
                      <li className='hover:cursor-pointer'>JS AddEventListener()</li>
                    </ul>
                    

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Arrays</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>JS Array Methods</li>
                      <li className='hover:cursor-pointer'>JS Array Search</li>
                      <li className='hover:cursor-pointer'>JS Array Sort</li>
                      <li className='hover:cursor-pointer'>JS Array Iterations</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Functions</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer'>Function Parameter</li>
                      <li className='hover:cursor-pointer'>Default Parameter</li>
                      <li className='hover:cursor-pointer'>Arrow Function</li>
                      <li className='hover:cursor-pointer'>Anonymous Function</li>
                      <li className='hover:cursor-pointer'>Higher Order Function</li>
                      <li className='hover:cursor-pointer'>Immediately Invoked Function</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Object</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>Object</li>
                      <li className='hover:cursor-pointer'>Arrays</li>
                      <li className='hover:cursor-pointer'>Arrays Methods</li>
                      <li className='hover:cursor-pointer'>String Methods</li>
                      <li className='hover:cursor-pointer'>Date</li>
                      <li className='hover:cursor-pointer'>Number</li>
                      <li className='hover:cursor-pointer'>Boolean</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Error Handling</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS Error Handling </li>
                      <li className='hover:cursor-pointer'>JS Try Catch</li>
                      <li className='hover:cursor-pointer'>JS Debugging</li>
                      <li className='hover:cursor-pointer'>JS Custom Error</li>
                      <li className='hover:cursor-pointer'>JS Extending Error</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Async/Await</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS Promises</li>
                      <li className='hover:cursor-pointer'>JS Promise Chaining</li>
                      <li className='hover:cursor-pointer'>JS Callbacks</li>
                      <li className='hover:cursor-pointer'>JS Asynchronous</li>
                      <li className='hover:cursor-pointer'>JS Async/Await</li>
                    </ul>



                    <h1 className="text-xl font-semibold mt-5 mb-2">JS OOPs</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS OOPs Class</li>
                      <li className='hover:cursor-pointer'>JS Object</li>
                      <li className='hover:cursor-pointer'>JS Prototype</li>
                      <li className='hover:cursor-pointer'>JS Constructor Method</li>
                      <li className='hover:cursor-pointer'>JS Static Method</li>
                      <li className='hover:cursor-pointer'>JS Encapsulation</li>
                      <li className='hover:cursor-pointer'>JS Inheritance</li>
                      <li className='hover:cursor-pointer'>JS Polymorphism</li>
                      <li className='hover:cursor-pointer'>JS Abstraction</li>
                    </ul>
                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS DOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS DOM(Document Object Model)</li>
                      <li className='hover:cursor-pointer'>getElementById</li>
                      <li className='hover:cursor-pointer'>getElementByClassName</li>
                      <li className='hover:cursor-pointer'>getElementByTagName</li>
                      <li className='hover:cursor-pointer'>QuerySelector</li>
                      <li className='hover:cursor-pointer'>QuerySelectorAll</li>
                      <li className='hover:cursor-pointer'>JS innerHTML property</li>
                      <li className='hover:cursor-pointer'>JS innerText property</li>
                    </ul>

                      <h1 className="text-xl font-semibold mt-5 mb-2">JS BOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS Window</li>
                      <li className='hover:cursor-pointer'>JS Screen</li>
                      <li className='hover:cursor-pointer'>JS Location</li>
                      <li className='hover:cursor-pointer'>JS History</li>
                      <li className='hover:cursor-pointer'>JS Navigator</li>
                      <li className='hover:cursor-pointer'>JS Popup Alert</li>
                      <li className='hover:cursor-pointer'>JS Timing</li>
                    </ul>

                    
                      <h1 className="text-xl font-semibold mt-5 mb-2">JS Cookies </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS Cookies</li>
                      <li className='hover:cursor-pointer'>Cookies Attributes</li>
                      <li className='hover:cursor-pointer'>Cookies With Multiple Name</li>
                      <li className='hover:cursor-pointer'>Deleting Cookies</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Web APIs </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>JS Web API</li>
                      <li className='hover:cursor-pointer'>JS History API</li>
                      <li className='hover:cursor-pointer'>JS Storage API</li>
                      <li className='hover:cursor-pointer'>JS Forms API</li>
                      <li className='hover:cursor-pointer'>JS Worker API</li>
                      <li className='hover:cursor-pointer'>JS Fetch API</li>
                      <li className='hover:cursor-pointer'>JS Geolocation API</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS AJAX</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer'>AJAX Intro</li>
                      <li className='hover:cursor-pointer'>AJAX XMLHttp</li>
                      <li className='hover:cursor-pointer'>AJAX Request</li>
                      <li className='hover:cursor-pointer'>AJAX Response</li>
                      <li className='hover:cursor-pointer'>AJAX XML File</li>
                      <li className='hover:cursor-pointer'>AJAX PHP</li>
                      <li className='hover:cursor-pointer'>AJAX ASP</li>
                      <li className='hover:cursor-pointer'>AJAX Database</li>
                      <li className='hover:cursor-pointer'>AJAX Applications</li>
                      <li className='hover:cursor-pointer'>AJAX Examples</li>
                    </ul>

                    
                    </div>
                   <div className='ml-5 p-2 w-full'>
                                        {showpage &&(
                                          <button onClick={() => setshowpage(null)}
                                           className='flex items-center mb-4 bg-green-300 px-4
                                           py-2 text-white rounded text-sm mt-10'>
                                            <FiArrowLeft/>
                                            Back
                                          </button>
                                        )}
                                        {renderpage()}
                       
                                      </div>
     </div>
                    
            )
        }
        
 export default JS;