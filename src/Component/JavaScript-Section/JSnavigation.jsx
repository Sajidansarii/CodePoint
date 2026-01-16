import React, { useState, useEffect, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Introduction from './Introductionofjs';
import WhatisJavaScript from './WhatisJavaScript';
import FeaturesofJS from './FeaturesofJS';
import JavaScriptVersions from './JavaScriptVersions';
import DiffrencebetweenJavaandJS from './DiffrencebetweenJavaandJS';
import SyntaxofJS from './SyntaxofJS';
import CommentinJS from './CommentinJS'
import VariablesinJS from './VariablesinJS';
import VarinJS from './VarinJS';
import LetinJS from './LetinJS';
import ConstinJS from './ConstinJS';
import Break from './Break';
import Continue from './Continue';
import Events from './Events';
import Math from './Math';
import Random from './Random';
import Errors from './Errors';
import Scopes from './Scopes';
import Modules from './Modules';
import Hoisting from './Hoisting';
import Spread from './Spread';
import IfElseInJS from './If-else';
import Switch from './Switch';
import Loops from './Loops';
import ForofLoop from './ForofLoop';
import ForinLoop from './ForinLoop';
import Return from './Return';
import String from './String';
import Symbol from './Symbol';
import Number from './Number';
import Null from './Null';
import Boolean from './Boolean';
import Bigint from './Bigint';
import Arithmatic from './Arithmatic';
import Assignment from './Assignment';
import Comparison from './Comparison';
import JSDate from './JSDate';
import JSDateGet from './JSDateGet';
import JSDateSet from './JSDateSet';
import JSClasses from './JSClasses';
import JSClassInheritance from './JSClassInheritance';
import JSClassStatic from './JSClassStatic';
import JSDOMEvents from './JSDOMEvents';
import JSCustomEvents from './JSCustomEvents';
import JSEventCapturing from './JSEventCapturing';
import JSEventBubbling from './JSEventBubbling';
import JSEventDelegation from './JSEventDelegation';
import JSWindow from './JSWindow';
import JSFormEvent from './JSFormEvent';
import JSKeyboardEvents from './JSKeyboardEvents';
import JSMouseEvents from './JSMouseEvents';
import JSAddEventListener from './JSAddEventListener';
import JSArrayMethods from './JSArrayMethods';
import JSArraySearch from './JSArraySearch';
import JSArraySort from './JSArraySort';
import JSArrayIterations from './JSArrayIterations';
import FunctionParameter from './FunctionParameter';
import DefaultParameter from './DefaultParameter';
import ArrowFunction from './ArrowFunction';
import AnonymousFunction from './AnonymousFunction';
import Function from './function';
import Object from './Object';
import ObjectMethod from './ObjectMethod';
import ObjectProperties from './ObjectProperties';
import ObjectDisplay from './ObjectDisplay';
import JSErrorHandling from './JSErrorHandling';
import JSTryCatch from './JSTryCatch';
import JSDebugging from './JSDebugging';
import JSCustomError from './JSCustomError';
import JSExtendingError from './JSExtendingError';
import JSPromises from './JSPromises';
import JSCallbacks from './JSCallbacks';
import JSAsynchronous from './JSAsynchronous';
import JSAsyncAwait from './JSAsyncAwait';
import JSgetElementById from './JSgetElementById';
import JSgetElementByClassName from './JSgetElementByClassName';
import JSgetElementByTagName from './JSgetElementByTagName';
import JSQuerySelector from './JSQuerySelector'; 
import JSQuerySelectorAll from './JSQuerySelectorAll';
import JSinnerHTMLproperty from './JSinnerHTMLproperty';
import JSinnerTextproperty from './JSinnerTextproperty';
import JSWindows from './JSWindows';
import JSScreen from './JSScreen';
import JSLocation from './JSLocation';
import JSHistory from './JSHistory';
import JSNavigator from './JSNavigator';
import JSPopupAlert from './JSPopupAlert';
import JSTiming from './JSTiming';
import JSCookies from './JSCookies';
import CookiesAttributes from './CookiesAttributes';
import JSWebAPI from './JSWebAPI';
import JSHistoryAPI from './JSHistoryAPI';
import JSStorageAPI from './JSStorageAPI';
import JSWorkerAPI from './JSWorkerAPI';
import JSFetchAPI from './JSFetchAPI';
import JSGeolocationAPI from './JSGeolocationAPI';
import AJAXIntro from './AJAXIntro';
import AJAXXMLHttp from './AJAXXMLHttp';
import AJAXRequest from './AJAXRequest';
import AJAXResponse from './AJAXResponse';
import AJAXXMLFile from './AJAXXMLFile';
import AJAXPHP from './AJAXPHP';
import AJAXASP from './AJAXASP';
import AJAXDatabase from './AJAXDatabase'; 
import AJAXApplications from './AJAXApplications';

const JS = () => {      
  const [isOpen, setisOpen] = useState(false);
  const [showpage,setshowpage] = useState(null);

  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    const handleclickoutside = (e) => {
      if(
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      )
      {
        setisOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleclickoutside);
    
    return () => {
      document.removeEventListener("mousedown", handleclickoutside);
    };
  }, [isOpen]);




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
      case 'CommentinJS':
      return <CommentinJS/>
      case 'VariablesinJS':
      return <VariablesinJS/>
      case 'VarinJS':
      return <VarinJS/>
      case 'LetinJS':
      return <LetinJS/>
      case'ConstinJS':
      return <ConstinJS/>
      case 'Break':
      return <Break/>
      case 'Continue':
      return <Continue/>
      case "Events":
      return <Events/>
      case 'Math':
         return <Math/>
         case 'Random':
           return <Random/>
           case 'Errors':
             return <Errors/>
             case "Scopes":
               return <Scopes/>
            case 'Modules':
              return <Modules/>
              case "Hoisting":
                return <Hoisting/>
                case 'Spread':
                  return <Spread/>
                  case 'IfElseInJS':
                    return <IfElseInJS/>
                  case 'Switch':
                    return <Switch/>
                    case 'Loops':
                      return <Loops/>
                          case 'ForofLoop':
                            return <ForofLoop/>
                            case 'ForinLoop':
                              return <ForinLoop/>
              case 'Return':
              return <Return/>
              case 'String':
              return <String/>
               case 'Symbol':
               return <Symbol/>
               case 'Number':
               return <Number/>
              case "Null":
               return <Null/>
              case 'Boolean':
              return <Boolean/>
              case 'Bigint':
              return <Bigint/>
              case 'Arithmatic':
              return <Arithmatic/>
              case 'Assignment':
              return <Assignment/>
              case 'Comparison':
              return <Comparison/>
              case 'JSDate':
              return <JSDate/>
              case 'JSDateGet':
              return <JSDateGet/>
              case 'JSDateSet':
              return <JSDateSet/>
              case 'JSClasses':
              return <JSClasses/>
              case 'JSClassInheritance':
              return <JSClassInheritance/>
              case 'JSClassStatic':
              return <JSClassStatic/>
              case 'JSDOMEvents':
              return <JSDOMEvents/>
              case 'JSCustomEvents':
              return <JSCustomEvents/>
              case 'JSEventCapturing':
              return <JSEventCapturing/>
              case 'JSEventBubbling':
              return <JSEventBubbling/>
              case 'JSEventDelegation':
              return <JSEventDelegation/>
              case 'JSWindow':
              return <JSWindow/>
              case 'JSFormEvent':
              return <JSFormEvent/>
              case 'JSKeyboardEvents':
              return <JSKeyboardEvents/>
              case 'JSMouseEvents':
              return <JSMouseEvents/>
              case 'JSAddEventListener':
              return <JSAddEventListener/>
              case 'JSArrayMethods':
              return <JSArrayMethods/>
              case 'JSArraySearch':
              return <JSArraySearch/>
              case 'JSArraySort':
              return <JSArraySort/>
              case 'JSArrayIterations':
              return <JSArrayIterations/>
              case 'FunctionParameter':
              return <FunctionParameter/>
              case 'DefaultParameter':
              return <DefaultParameter/>
              case 'ArrowFunction':
              return <ArrowFunction/>
              case 'AnonymousFunction':
              return <AnonymousFunction/>
              case 'Function':
              return <Function/>
              case 'Object':
              return <Object/>
              case 'ObjectProperties':
              return <ObjectProperties/>
              case 'ObjectMethod':
              return <ObjectMethod/>
              case 'ObjectDisplay':
              return <ObjectDisplay/>
              case 'JSErrorHandling':
              return <JSErrorHandling/>
              case 'JSTryCatch':
              return <JSTryCatch/>
              case 'JSDebugging':
              return <JSDebugging/>
              case 'JSCustomError':
              return <JSCustomError/>
              case 'JSExtendingError':
              return <JSExtendingError/>
              case 'JSPromises':
              return <JSPromises/>
              case 'JSCallbacks':
              return <JSCallbacks/>
              case 'JSAsynchronous':
              return <JSAsynchronous/>
              case 'JSAsyncAwait':
              return <JSAsyncAwait/>
              case 'JSgetElementById':
              return <JSgetElementById/>
              case 'JSgetElementByClassName':
              return <JSgetElementByClassName/>
              case 'JSgetElementByTagName':
              return <JSgetElementByTagName/>
              case 'JSQuerySelector':
              return <JSQuerySelector/>
              case 'JSQuerySelectorAll':
              return <JSQuerySelectorAll/>
              case 'JSinnerHTMLproperty':
              return <JSinnerHTMLproperty/>
              case 'JSinnerTextproperty':
              return <JSinnerTextproperty/>
              case 'JSWindows':
              return <JSWindows/>
              case 'JSScreen':
              return <JSScreen/>
              case 'JSLocation':
              return <JSLocation/>
              case 'JSHistory':
              return <JSHistory/>
              case 'JSNavigator':
              return <JSNavigator/>
              case 'JSPopupAlert':
              return <JSPopupAlert/>
              case 'JSTiming':
              return <JSTiming/>
              case 'JSCookies':
              return <JSCookies/>
              case 'CookiesAttributes':
              return <CookiesAttributes/>
              case 'JSWebAPI':
              return <JSWebAPI/>
              case 'JSHistoryAPI':
              return <JSHistoryAPI/>
              case 'JSStorageAPI':
              return <JSStorageAPI/>
              case 'JSWorkerAPI':
              return <JSWorkerAPI/>
              case 'JSFetchAPI':
              return <JSFetchAPI/>
              case 'JSGeolocationAPI':
              return <JSGeolocationAPI/>
              case 'AJAXIntro':
              return <AJAXIntro/>
              case 'AJAXXMLHttp':
              return <AJAXXMLHttp/>
              case 'AJAXRequest':
              return <AJAXRequest/>
              case 'AJAXResponse':
              return <AJAXResponse/>
              case 'AJAXXMLFile':
              return <AJAXXMLFile/>
              case 'AJAXPHP':
              return <AJAXPHP/>
              case 'AJAXASP':
              return <AJAXASP/>
              case 'AJAXDatabase':
              return <AJAXDatabase/>
              case 'AJAXApplications':
              return <AJAXApplications/>



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
                  ref={buttonRef}
                  className="bg-gray-200 text-2xl px-2 fixed top-16 left-4 z-50 sm:hidden"
                  onClick={() => setisOpen(!isOpen)}>
                  <i className="fas fa-bars"></i>
                </button>  
        
                <div className={`lg:sticky   lg:left-0 lg:top-16 w-60  fixed h-[calc(100vh-4rem)] overflow-y-auto 
                                 bg-gray-200 px-5 py-6 shadow-lg z-40 transform transition-transform
                                   duration-300 sm:translate-x-0 sm:block
                                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                                `} 
                                ref={sidebarRef}>
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Basics</h1>
                    <ul className="space-y-1 text-sm">   
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'WhatisJavaScript' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('WhatisJavaScript')}>What is JavaScript ?</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FeaturesofJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('FeaturesofJS')}>Features of JavaScript</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JavaScriptVersions' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('JavaScriptVersions')}>JavaScript Versions</li>  
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'DiffrencebetweenJavaandJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('DiffrencebetweenJavaandJS')}>Diffrence between Java and JavaScript</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'SyntaxofJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('SyntaxofJS')}>Syntax of JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CommentinJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('CommentinJS')}>Comment in JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'VariablesinJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('VariablesinJS')}>Variables in JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'VarinJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('VarinJS')}>Var in JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'LetinJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('LetinJS')}>Let in JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ConstinJS' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('ConstinJS')}>Const in JS</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Break' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Break')}>Break</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Continue' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Continue')}>Continue</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Events' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Events')}>Events</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Math' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Math')}>Math</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Random' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Random')}>Random</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Errors' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Errors')}>Errors</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Scopes' ? 'bg-gra3' :''}`} onClick={()=> setshowpage("Scopes")}>Scopes</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Modules' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Modules')}>Modules</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Hoisting' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Hoisting')}>Hoisting</li>
                    <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Spread' ? 'bg-gra3' :''}`} onClick={()=> setshowpage('Spread')}>Spread</li>
                    </ul>


                   <h1 className="text-xl font-semibold mt-5 mb-2">JS Statements</h1>
                   <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'IfElseInJS' ? 'bg-gray-300' : ''}`} onClick={()=> setshowpage('IfElseInJS')}>If-else</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Switch' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Switch')}>Switch</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Loops' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Loops')}>Loops</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ForofLoop' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ForofLoop')}>For ..of Loop</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ForinLoop' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ForinLoop')}>For ..in Loop</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Return' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Return')}>Return</li>
                    </ul>

        
                    <h1 className="text-xl font-semibold mt-5 mb-2">Js Data Types</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'String' ? 'bg-gray-300' : ''}`} onClick={()=> setshowpage('String')}>String</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Symbol' ? 'bg-gray-300' : ''}`} onClick={()=> setshowpage('Symbol')}>Symbol</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Number' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Number')}>Number</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Null'    ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Null')}>Null</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Boolean' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Boolean')}>Boolean</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Bigint' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Bigint')}>Bigint</li>
                    </ul>


                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Oprator</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Arithmatic' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Arithmatic')}>Arithmatic Oprator</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Assignment' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Assignment')}>Assignment Oprator</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Comparison' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Comparison')}>Comparison Oprator</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Dates</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSDate' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSDate')}>JS Date Formats</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSDateGet' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSDateGet')}>JS Date Get</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSDateSet' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSDateSet')}>JS Date Set</li>
                    </ul>

                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Class</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSClasses' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSClasses')}>JS Classes</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSClassInheritance' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSClassInheritance')}>JS Class Inheritance</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSClassStatic' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSClassStatic')}>JS Class Static</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS DOM Events</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSDOMEvents' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSDOMEvents')}>JS DOM Events</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSCustomEvents' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSCustomEvents')}>JS Custom Events</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSEventCapturing' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSEventCapturing')}>JS Event Capturing</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSEventBubbling' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSEventBubbling')}>JS Event Bubbling</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSEventDelegation' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSEventDelegation')}>JS Event Delegation</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSWindow' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSWindow')}>JS Window/Document Events</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSFormEvent' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSFormEvent')}>JS Form Event</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSKeyboardEvents' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSKeyboardEvents')}>JS Keyboard Events</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSMouseEvents' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSMouseEvents')}>JS Mouse Events</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSAddEventListener' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSAddEventListener')}>JS AddEventListener()</li>
                    </ul>
                    

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Arrays</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSArrayMethods' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSArrayMethods')}>JS Array Methods</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSArraySearch' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSArraySearch')}>JS Array Search</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSArraySort' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSArraySort')}>JS Array Sort</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSArrayIterations' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSArrayIterations')}>JS Array Iterations</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Functions</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Function' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Function')}>Function</li> 
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'FunctionParameter' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('FunctionParameter')}>Function Parameter</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'DefaultParameter' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('DefaultParameter')}>Default Parameter</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ArrowFunction' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ArrowFunction')}>Arrow Function</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AnonymousFunction' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AnonymousFunction')}>Anonymous Function</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Object</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'Object' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('Object')}>Object</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ObjectProperties' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ObjectProperties')}>Object Properties</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ObjectMethod' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ObjectMethod')}>Object Method</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'ObjectDisplay' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('ObjectDisplay')}>Object Display</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Error Handling</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSErrorHandling' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSErrorHandling')}>JS Error Handling </li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSTryCatch' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSTryCatch')}>JS Try Catch</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSDebugging' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSDebugging')}>JS Debugging</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSCustomError' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSCustomError')}>JS Custom Error</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSExtendingError' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSExtendingError')}>JS Extending Error</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Async/Await</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSPromises' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSPromises')}>JS Promises</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSCallbacks' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSCallbacks')}>JS Callbacks</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSAsynchronous' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSAsynchronous')}>JS Asynchronous</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSAsyncAwait' ? 'bg-gra3' : ''}` } onClick={()=>setshowpage('JSAsyncAwait')}>JS Async/Await</li>
                    </ul>

                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS DOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSgetElementById' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSgetElementById')}>getElementById</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSgetElementByClassName' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSgetElementByClassName')}>getElementByClassName</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSgetElementByTagName' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSgetElementByTagName')}>getElementByTagName</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSQuerySelector' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSQuerySelector')}>QuerySelector</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSQuerySelectorAll' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSQuerySelectorAll')}>QuerySelectorAll</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSinnerHTMLproperty' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSinnerHTMLproperty')}>JS innerHTML property</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSinnerTextproperty' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSinnerTextproperty')}>JS innerText property</li>
                    </ul>

                      <h1 className="text-xl font-semibold mt-5 mb-2">JS BOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSWindows' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSWindows')}>JS Window</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSScreen' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSScreen')}>JS Screen</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSLocation' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSLocation')}>JS Location</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSHistory' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSHistory')}>JS History</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSNavigator' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSNavigator')}>JS Navigator</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSPopupAlert' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSPopupAlert')}>JS Popup Alert</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSTiming' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSTiming')}>JS Timing</li>
                    </ul>

                    
                      <h1 className="text-xl font-semibold mt-5 mb-2">JS Cookies </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSCookies' ? 'bg-gray-300' :''}`} onClick={()=>setshowpage('JSCookies')}>JS Cookies</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'CookiesAttributes' ? 'bg-gray-300' :''}`} onClick={()=>setshowpage('CookiesAttributes')}>Cookies Attributes</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Web APIs </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSTiming' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('c')}>JS Web API</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSHistoryAPI' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSHistoryAPI')}>JS History API</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSStorageAPI' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSStorageAPI')}>JS Storage API</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSWorkerAPI' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSWorkerAPI')}>JS Worker API</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSFetchAPI' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSFetchAPI')}>JS Fetch API</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'JSGeolocationAPI' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('JSGeolocationAPI')}>JS Geolocation API</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS AJAX</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXIntro' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXIntro')}>AJAX Intro</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXXMLHttp' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXXMLHttp')}>AJAX XMLHttp</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXRequest' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXRequest')}>AJAX Request</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXResponse' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXResponse')}>AJAX Response</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXXMLFile' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXXMLFile')}>AJAX XML File</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXPHP' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXPHP')}>AJAX PHP</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXASP' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXASP')}>AJAX ASP</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXDatabase' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXDatabase')}>AJAX Database</li>
                      <li className={`cursor-pointer rounded hover:bg-gray-300 ${showpage === 'AJAXApplications`' ? 'bg-gray-300' : ''}`} onClick={()=>setshowpage('AJAXApplications')}>AJAX Applications</li>
                    </ul>

                    
                    </div>
                   <div className= {`transition-all duration-300 p-4 w-full 
                                    ${isOpen ? "sm:ml-64" : "sm:ml-0"}`}>
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