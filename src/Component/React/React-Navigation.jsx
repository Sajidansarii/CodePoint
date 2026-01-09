import React from "react";
import { useState } from "react";
import {FiArrowLeft} from 'react-icons/fi';
import ReactInstallation from './React Installation';
import Intro from "./React Intro";
import ReactClass from './React-Class';
import Reactcomponent from './React-Components'
import Conditional from './React Conditionals';
import ES6 from "./React ES6";
import ReactFormsubmit from './React Forms Submit';
import ReactForms from './React Forms';
import ReactAttributes from './React JSX Attributes';
import ReactExpressons from './React JSX Expressions';
import ImportExport from './React Import&Export';
import JSXIntro from './React JSX Intro';
import ReactList from './React List';
import ReactProchild from './React Props Children';
import ReactProDestructuring from './React Props Destructuring';
import ReactProps from './React Props';
import ReactRender from './React Render Html';
import ReactVirtual from './React Virtual DOM';
import ReactRedux from './React React Redux';
import ReactContext from './React Context API';
import HooksIntroduction from './React Hooks Introduction';
import UseStateHooks from './React UseState Hooks';
import UseEffectHooks from './React UseEffect Hooks';
import UseRefHooks from './React UseRef Hooks';
import UseMemoHooks from './React UseMemo Hooks';
import UseContextHooks from './React UseContext Hooks';
import ReactDOM from './React DOM Intro';
import ReactCapture from './React Capture Event';
import ReactMouse from './React Mouse Events';
import ReactDoubleClick from './React Doubleclick Event';
import ReactOnSubmit from './React Onsubmit Event';
import ReactOnScroll from './React OnScroll Event';
import ReactonBlur from './React onBlur Events';
import ReactLifeCycle from './React LIfecycle Event';
import ReactComponenetMOunt from './React Component Mount';
import ReactComponenetcatch from './React ComponentCatch';
import ReactcomponentUpdate from './React ComponenetUpdate';
import ReactComponenetUnmount from './React Componenet Unmount';
import ReactRouter from './React JS Router';
import  ReactRouterdom from './React Router dom';
import ReactRouterTypes from './React JS Types of Router';
import ReactRouterHooks from './React Router Hooks';
import NavigationRouting from './Navigation And Routing in react';
import NavlinkRouter from './Navlink in React Router dom';




const ReactNav = () => {
    const [isOpen, setisOpen] = useState(false);
    const [showpage,setshowpage] = useState(null);

    const RenderPage = () => {
        switch(showpage){
          case 'ReactInstallation':
          return <ReactInstallation/> 
          case 'ReactClass':
          return <ReactClass/>  
          case 'Reactcomponent':
          return <Reactcomponent/>
          case 'Conditional':
          return <Conditional/>
          case 'ES6':
          return <ES6/>  
          case 'ReactFormsubmit':
          return <ReactFormsubmit/> 
          case 'ReactForms':
          return <ReactForms/>  
          case 'ReactAttributes':
          return <ReactAttributes/>  
          case 'ReactExpressons':
          return <ReactExpressons/>  
          case 'ImportExport':
          return <ImportExport/>  
          case 'JSXIntro':
          return <JSXIntro/>  
          case 'ReactList':
          return <ReactList/>   
          case 'ReactProchild':
          return <ReactProchild/> 
          case 'ReactProDestructuring':
          return <ReactProDestructuring/>  
          case 'ReactProps':
          return <ReactProps/>   
          case 'ReactRender':
          return <ReactRender/>   
          case 'ReactVirtual':
          return <ReactVirtual/>
          case 'ReactRedux':
          return <ReactRedux/> 
          case 'ReactContext':
          return <ReactContext/>   
          case 'HooksIntroduction':
          return <HooksIntroduction/>  
          case 'UseStateHooks':
          return <UseStateHooks/>  
          case 'UseEffectHooks':
          return <UseEffectHooks/>  
          case 'UseRefHooks':
          return <UseRefHooks/>  
          case 'UseMemoHooks':
          return <UseMemoHooks/>  
          case 'UseContextHooks':
          return <UseContextHooks/>  
          case 'ReactDOM':
          return <ReactDOM/>  
          case 'ReactCapture':
          return <ReactCapture/>  
          case 'ReactMouse':
          return <ReactMouse/>
          case 'ReactDoubleClick':
          return <ReactDoubleClick/>  
          case 'ReactOnSubmit':
          return <ReactOnSubmit/>  
          case 'ReactOnScroll':
          return <ReactOnScroll/>  
          case 'ReactonBlur':
          return <ReactonBlur/>  
          case 'ReactLifeCycle':
          return <ReactLifeCycle/>  
          case 'ReactComponenetMOunt':
          return <ReactComponenetMOunt/> 
          case 'ReactComponenetcatch':
          return <ReactComponenetcatch/>  
          case 'ReactcomponentUpdate':
          return <ReactcomponentUpdate/>   
          case 'ReactComponenetUnmount':
          return <ReactComponenetUnmount/>  
          case 'ReactRouter':
          return <ReactRouter/>  
          case 'ReactRouterdom':
          return <ReactRouterdom/>
          case 'ReactRouterTypes':
          return <ReactRouterTypes/>  
          case 'ReactRouterHooks':
          return <ReactRouterHooks/> 
          case 'NavigationRouting':
          return <NavigationRouting/>  
          case 'NavlinkRouter':
          return <NavlinkRouter/>  
          
          


          
          

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
                  onClick={() => setisOpen(!isOpen)}>
                  <i className="fas fa-bars"></i>
                </button>
        

                 {/* Sidebar */}
                <div className={`lg:sticky lg:left-0 lg:top-16 w-60 fixed h-[calc(100vh-4rem)] overflow-y-auto 
                                 bg-gray-200 px-5 py-6 shadow-lg z-40 transform transition-transform
                                   duration-300 sm:translate-x-0 sm:block
                                   ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                                 >  


                   <h1 className="text-xl font-semibold mt-5 mb-2">React Tutorial</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactInstallation')}>React Installation</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRender')}>React Render HTML</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ES6')}>React ES6</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('JSXIntro')}>React JSX Intro</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactAttributes')}>React JSX Attributes</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactExpressons')}>React JSX Expressions</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ImportExport')}>React Import & Export</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('Reactcomponent')}>React Componenets</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactClass')}>React Class</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactForms')}>React Forms</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactFormsubmit')}>React Forms Submit</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactProps')}>React Props</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactProDestructuring')}>React Props Destructuring</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactProchild')}>React Props Children</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('Conditional')}>React Conditionals</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactList')}>React Lists</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactVirtual')}>React Virtual DOM</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRedux')}>React Redux</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactContext')}>React Context API</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">React Hooks</h1>
                     <ul className="space-y-2 text-sm">
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('HooksIntroduction')}>React Hooks Introduction</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('UseStateHooks')}>React UseState Hooks</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('UseEffectHooks')}>React UseEffect Hooks</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('UseRefHooks')}>React UseRef Hooks</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('UseMemoHooks')}>React UseMemo Hooks</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('UseContextHooks')}>React UseContext Hooks</li>
                     </ul>



                      <h1 className="text-xl font-semibold mt-5 mb-2">React DOM Events</h1>
                     <ul className="space-y-2 text-sm">
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactDOM')}>React Events Introduction</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactCapture')}>React onclickcapture Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactMouse')}>React onMouseDown Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactDoubleClick')}>React onDoubleClick Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactOnSubmit')}>React onSubmit Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactOnScroll')}>React onScroll Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactonBlur')}>React onBlur Event</li>
                     </ul>


                      <h1 className="text-xl font-semibold mt-5 mb-2">React Lifecycle Events</h1>
                     <ul className="space-y-2 text-sm">
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactLifeCycle')}>LifeCycle Events</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactComponenetcatch')}>ComponentCatch Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactComponenetMOunt')}>ComponenetMount Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactcomponentUpdate')}>Component Update Event</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactComponenetUnmount')}>Component Unmount Event</li>
                     </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">Routing in React</h1>
                     <ul className="space-y-2 text-sm">
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRouter')}>React JS Router</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRouterdom')}>What is react-router-dom?</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRouterTypes')}>React JS Types of Routers</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('ReactRouterHooks')}>React-Router Hooks</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('NavigationRouting')}>Navigation and Routing</li>
                      <li className='cursor-pointer rounded hover:bg-gray-300 active:bg-gray-300 transition-colors' onClick={()=> setshowpage('NavlinkRouter')}>Link and NavLink components</li>
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