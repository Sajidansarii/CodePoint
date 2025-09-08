import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import WhatisJavaScript from './WhatisJavaScript';
import Introduction from './Introductionofjs';
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
import ForLoop from './ForLoop';
import WhileLoop from './WhileLoop';
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
import Logical from './Logical';
import Comparison from './Comparison';
import Conditional from './Conditional';
import Nullish from './Nullish';
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
import HigherOrderFunction from './HigherOrderFunction';
import ImmediatelyInvokedFunction from './ImmediatelyInvokedFunction';
import Object from './Object';
import Arrays from './Arrays';
import StringMethods from './StringMethods';
import NumberObject from './NumberObject';
import BooleanObject from './BooleanObject';
import JSErrorHandling from './JSErrorHandling';
import JSTryCatch from './JSTryCatch';
import JSDebugging from './JSDebugging';
import JSCustomError from './JSCustomError';
import JSExtendingError from './JSExtendingError';
import JSPromises from './JSPromises';
import JSPromiseChaining from './JSPromiseChaining';
import JSCallbacks from './JSCallbacks';
import JSAsynchronous from './JSAsynchronous';
import JSAsyncAwait from './JSAsyncAwait';  
import JSOOPsClass from './JSOOPsClass';
import JSObject from './JSObject';
import JSPrototype from './JSPrototype';
import JSConstructorMethod from './JSConstructorMethod';
import JSStaticMethod from './JSStaticMethod';
import JSEncapsulation from './JSEncapsulation';
import JSPolymorphism from './JSPolymorphism';
import JSAbstraction from './JSAbstraction';
import JSDOM from './JSDOM';
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
import CookiesWithMultipleName from './CookiesWithMultipleName';
import DeletingCookies from './DeletingCookies';    
import JSWebAPI from './JSWebAPI';
import JSHistoryAPI from './JSHistoryAPI';
import JSStorageAPI from './JSStorageAPI';
import JSFormsAPI from './JSFormsAPI';
import JSWorkerAPI from './JSWorkerAPI';
import JSFetchAPI from './JSFetchAPI';
import JSGeolocationAPI from './JSGeolocationAPI';
import AJAXIntro from './AJAXIntro';
import AJAXXMLHttp from './AJAXIntro';
import AJAXRequest from './AJAXRequest';
import AJAXResponse from './AJAXResponse';
import AJAXXMLFile from './AJAXXMLFile';
import AJAXPHP from './AJAXPHP';
import AJAXASP from './AJAXASP';
import AJAXDatabase from './AJAXDatabase'; 
import AJAXApplications from './AJAXApplications';
import AJAXExamples from './AJAXExamples';

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
                      case 'ForLoop':
                        return <ForLoop/>
                        case 'WhileLoop':
                          return <WhileLoop/>
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
              case 'Logical':
              return <Logical/>
              case 'Comparison':
              return <Comparison/>
              case 'Conditional':
                return <Conditional/>
              case 'Nullish':
              return <Nullish/>
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
              case 'HigherOrderFunction':
              return <HigherOrderFunction/>
              case 'ImmediatelyInvokedFunction':
              return <ImmediatelyInvokedFunction/>
              case 'Object':
              return <Object/>
              case 'Arrays':
              return <Arrays/>
              case 'StringMethods':
              return <StringMethods/>
              case 'NumberObject':
              return <NumberObject/>
              case 'BooleanObject':
              return <BooleanObject/>
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
              case 'JSPromiseChaining':
              return <JSPromiseChaining/>
              case 'JSCallbacks':
              return <JSCallbacks/>
              case 'JSAsynchronous':
              return <JSAsynchronous/>
              case 'JSAsyncAwait':
              return <JSAsyncAwait/>
              case 'JSOOPsClass':
              return <JSOOPsClass/>
              case 'JSObject':
              return <JSObject/>
              case 'JSPrototype':
              return <JSPrototype/>
              case 'JSConstructorMethod':
              return <JSConstructorMethod/>
              case 'JSStaticMethod':
              return <JSStaticMethod/>
              case 'JSEncapsulation':
              return <JSEncapsulation/>
              case 'JSPolymorphism':
              return <JSPolymorphism/>
              case 'JSAbstraction':
              return <JSAbstraction/>
              case 'JSDOM':
              return <JSDOM/>
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
              case 'CookiesWithMultipleName':
              return <CookiesWithMultipleName/>
              case 'DeletingCookies':
              return <DeletingCookies/>
              case 'JSWebAPI':
              return <JSWebAPI/>
              case 'JSHistoryAPI':
              return <JSHistoryAPI/>
              case 'JSStorageAPI':
              return <JSStorageAPI/>
              case 'JSFormsAPI':
              return <JSFormsAPI/>
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
              case 'AJAXExamples':
              return <AJAXExamples/>



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
        
                <div className={`sticky top-16 left-0 w-56 overflow-y-auto h-[100vh]
                               bg-gray-200 px-5 py-6 z-40 transform transition-transform
                                duration-300 shadow-lg sm:translate-x-0 sm:block 
                                `} >
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Basics</h1>
                    <ul className="space-y-1 text-sm">   
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('WhatisJavaScript')}>What is JavaScript ?</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('FeaturesofJS')}>Features of JavaScript</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('JavaScriptVersions')}>JavaScript Versions</li>  
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('DiffrencebetweenJavaandJS')}>Diffrence between Java and JavaScript</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('SyntaxofJS')}>Syntax of JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('CommentinJS')}>Comment in JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('VariablesinJS')}>Variables in JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('VarinJS')}>Var in JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('LetinJS')}>Let in JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('ConstinJS')}>Const in JS</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Break')}>Break</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Continue')}>Continue</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Events')}>Events</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Math')}>Math</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Random')}>Random</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Errors')}>Errors</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage("Scopes")}>Scopes</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Modules')}>Modules</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Hoisting')}>Hoisting</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Spread')}>Spread</li>
                    </ul>


                   <h1 className="text-xl font-semibold mt-5 mb-2">JS Statements</h1>
                   <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('IfElseInJS')}>If-else</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Switch')}>Switch</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Loops')}>Loops</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('ForLoop')}>For Loop</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('WhileLoop')}>While Loop</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('ForofLoop')}>For ..of Loop</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('ForinLoop')}>For ..in Loop</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Return')}>Return</li>
                    </ul>

        
                    <h1 className="text-xl font-semibold mt-5 mb-2">Js Data Types</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('String')}>String</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Symbol')}>Symbol</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Number')}>Number</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Null')}>Null</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Boolean')}>Boolean</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Bigint')}>Bigint</li>
                    </ul>


                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Oprator</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Arithmatic')}>Arithmatic Oprator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Assignment')}>Assignment Oprator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Logical')}>Logical Oprator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Comparison')}>Comparison Oprator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Conditional')}>Conditional Oprator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Nullish')}>Nullish Oprator</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Dates</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('')}>Date</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDate')}>JS Date Formats</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDateGet')}>JS Date Get</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDateSet')}>JS Date Set</li>
                    </ul>

                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Class</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSClasses')}>JS Classes</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSClassInheritance')}>JS Class Inheritance</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSClassStatic')}>JS Class Static</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Events</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDOMEvents')}>JS DOM Events</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSCustomEvents')}>JS Custom Events</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSEventCapturing')}>JS Event Capturing</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSEventBubbling')}>JS Event Bubbling</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSEventDelegation')}>JS Event Delegation</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSWindow')}>JS Window/Document Events</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSFormEvent')}>JS Form Event</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSKeyboardEvents')}>JS Keyboard Events</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSMouseEvents')}>JS Mouse Events</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSAddEventListener')}>JS AddEventListener()</li>
                    </ul>
                    

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Arrays</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSArrayMethods')}>JS Array Methods</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSArraySearch')}>JS Array Search</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSArraySort')}>JS Array Sort</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSArrayIterations')}>JS Array Iterations</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Functions</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('FunctionParameter')}>Function Parameter</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('DefaultParameter')}>Default Parameter</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('ArrowFunction')}>Arrow Function</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AnonymousFunction')}>Anonymous Function</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('HigherOrderFunction')}>Higher Order Function</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('ImmediatelyInvokedFunction')}>Immediately Invoked Function</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Object</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Object')}>Object</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('Arrays')}>Arrays</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('StringMethods')}>String Methods</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('NumberObject')}>Number</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('BooleanObject')}>Boolean</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">JS Error Handling</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSErrorHandling')}>JS Error Handling </li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSTryCatch')}>JS Try Catch</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDebugging')}>JS Debugging</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSCustomError')}>JS Custom Error</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSExtendingError')}>JS Extending Error</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Async/Await</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSPromises')}>JS Promises</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSPromiseChaining')}>JS Promise Chaining</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSCallbacks')}>JS Callbacks</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSAsynchronous')}>JS Asynchronous</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSAsyncAwait')}>JS Async/Await</li>
                    </ul>



                    <h1 className="text-xl font-semibold mt-5 mb-2">JS OOPs</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSOOPsClass')}>JS OOPs Class</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSObject')}>JS Object</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSPrototype')}>JS Prototype</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSConstructorMethod')}>JS Constructor Method</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSStaticMethod')}>JS Static Method</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSEncapsulation')}>JS Encapsulation</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSPolymorphism')}>JS Polymorphism</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSAbstraction')}>JS Abstraction</li>
                    </ul>
                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">JS DOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSDOM')}>JS DOM(Document Object Model)</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSgetElementById')}>getElementById</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSgetElementByClassName')}>getElementByClassName</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSgetElementByTagName')}>getElementByTagName</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSQuerySelector')}>QuerySelector</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSQuerySelectorAll')}>QuerySelectorAll</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSinnerHTMLproperty')}>JS innerHTML property</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSinnerTextproperty')}>JS innerText property</li>
                    </ul>

                      <h1 className="text-xl font-semibold mt-5 mb-2">JS BOM</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSWindows')}>JS Window</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSScreen')}>JS Screen</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSLocation')}>JS Location</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSHistory')}>JS History</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSNavigator')}>JS Navigator</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSPopupAlert')}>JS Popup Alert</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSTiming')}>JS Timing</li>
                    </ul>

                    
                      <h1 className="text-xl font-semibold mt-5 mb-2">JS Cookies </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSCookies')}>JS Cookies</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('CookiesAttributes')}>Cookies Attributes</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('CookiesWithMultipleName')}>Cookies With Multiple Name</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('DeletingCookies')}>Deleting Cookies</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS Web APIs </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSWebAPI')}>JS Web API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSHistoryAPI')}>JS History API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSStorageAPI')}>JS Storage API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSFormsAPI')}>JS Forms API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSWorkerAPI')}>JS Worker API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSFetchAPI')}>JS Fetch API</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('JSGeolocationAPI')}>JS Geolocation API</li>
                    </ul>

                     <h1 className="text-xl font-semibold mt-5 mb-2">JS AJAX</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXIntro')}>AJAX Intro</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXXMLHttp')}>AJAX XMLHttp</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXRequest')}>AJAX Request</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXResponse')}>AJAX Response</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXXMLFile')}>AJAX XML File</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXPHP')}>AJAX PHP</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXASP')}>AJAX ASP</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXDatabase')}>AJAX Database</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXApplications')}>AJAX Applications</li>
                      <li className='hover:cursor-pointer' onClick={()=>setshowpage('AJAXExamples')}>AJAX Examples</li>
                    </ul>

                    
                    </div>
                   <div className='ml-10 p-4 w-full'>
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