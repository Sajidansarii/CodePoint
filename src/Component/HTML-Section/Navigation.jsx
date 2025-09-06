import React, { useState } from 'react';
import Introduction from './Introduction';
import What from "./What";
import How  from "./How";
import Basics  from "./Basics";
import Elements  from "./Elements";
import List  from "./List";
import Comments  from "./Comments";
import Entities from './Entities';
import Tags from './Tags';
import Headings from './Headings';
import Paragraphs from './Paragraphs';
import Formating from './Formating';
import Links from './Links';
import Images from './Images';
import Table from './Table';
import Colour from './Colour';
import Block from './Block';
import Title from './Title';
import Div from './Div';
import Class from './Class';
import Id from './Id';
import Iframe  from './Iframe';
import  JavaScript from './JavaScript';
import FilePath from './FilePath';
import Head from './Head';
import Layout from './Layout';
import Emojis from './Emojis';
import Symbols from './Symbols';
import Responsive from './Responsive';
import {FiArrowLeft} from 'react-icons/fi';
import Media from './Media';
import Video from './Video';
import Audio from './Audio';
import Plugins from './Plug-ins';
import YouTube from './YouTube';
import Form from './Form';
import Attributes from  './Attributes'; 
import FormElements from './FormElements';
import InputeTypes  from './inputeTypes'; 
import InputeAttributes from './InputeAttributes';
import FormAttributes from './FormAttributes';
import WebAPIs from './WebAPIs';
import Geolocation from './Geolocation';
import DragandDrop from './DragandDrop';
import WebStorage from './WebStorage';
import WebWorker from './WebWorker';
import TagList from './TagList';
import ReferencesAttributes from './ReferencesAttributes';
import GlobalAttributes from './GlobalAttributes';
import HTTPMethods from './HTTPMethodsdetails';
import HTTPMessages from './HTTPMessagesdetails'; 
import HTMLLangCodes from './HTMLLangCodes';
import HTMLURLEncode from './HTMLURLEncode';
import HTMLCharacterSets from './HTMLCharacterSets';
import HTMLDoctypes from './HTMLDoctypes';
import HTMLVideo from './HTMLVideo';
import HTMLAudio from './HTMLAudio';
import HTMLCanvas from './HTMLCanvas';



const Html = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showpage,setshowpage] = useState(null)

  const renderpage = () =>{
    switch (showpage){
      case 'Introduction':
        return <Introduction/>
        case 'What':
          return <What/>
           case 'How':
          return <How/>
           case 'Basics':
          return <Basics/>
           case 'Elements':
          return <Elements/>
          case 'List':
          return <List/>
          case 'Comments':
          return <Comments/>
           case 'Entities':
          return <Entities/>
           case 'Tags':
          return <Tags/>
          case 'Headings':
          return <Headings/>
          case 'Paragraphs':
          return <Paragraphs/>
          case 'Formating':
          return <Formating/>
          case 'Links':
          return <Links/>
          case 'Images':
          return <Images/>
          case 'Table':
          return <Table/>
          case 'Colour':
          return <Colour/>
          case 'Block':
          return <Block/>
          case 'Title':
          return <Title/>
          case 'Div':
          return <Div/>
          case 'Class':
          return <Class/>
          case 'Id':
          return <Id/>
          case 'Iframe':
          return <Iframe/>
          case 'JavaScript':
          return <JavaScript/>
          case 'FilePath':
          return <FilePath/>
          case 'Head':
          return <Head/>
          case 'Layout':
          return <Layout/>
          case 'Emojis':
          return <Emojis/>
          case 'Symbols':
          return <Symbols/>
          case 'Responsive':
          return <Responsive/>
          case 'Media':
          return <Media/>
          case 'Video':
          return <Video/>
          case 'Audio':
          return <Audio/>
          case 'Plugins':
          return <Plugins/>
          case 'YouTube':
          return <YouTube/>
          case 'Form':
          return <Form/>
          case 'Attributes':
          return <Attributes/>
          case 'FormElements':
          return <FormElements/>
          case 'InputeTypes':
          return <InputeTypes/>
          case 'InputeAttributes':
          return <InputeAttributes/>
          case 'FormAttributes':
          return <FormAttributes/>
          case 'WebAPIs':
          return <WebAPIs/>
          case 'Geolocation':
          return <Geolocation/>
          case 'DragandDrop':
          return <DragandDrop/>
          case 'WebStorage':
          return <WebStorage/>
          case 'WebWorker':
          return <WebWorker/>
          case 'TagList':
          return <TagList/>
          case 'ReferencesAttributes':  
          return <ReferencesAttributes/>
          case 'GlobalAttributes':  
          return <GlobalAttributes/>
          case 'HTTPMethods':  
          return <HTTPMethods/>
          case 'HTTPMessages':  
          return <HTTPMessages/>
          case 'HTMLLangCodes':  
          return <HTMLLangCodes/>
          case 'HTMLURLEncode':  
          return <HTMLURLEncode/>
          case 'HTMLCharacterSets':  
          return <HTMLCharacterSets/>
          case 'HTMLDoctypes':  
          return <HTMLDoctypes/>
          case 'HTMLVideo':  
          return <HTMLVideo/>
          case 'HTMLAudio':  
          return <HTMLAudio/>
          case 'HTMLCanvas':  
          return <HTMLCanvas/>
        default:
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
                  onClick={() => setIsOpen(!isOpen)}>
                  <i className="fas fa-bars"></i>
                </button>
        
        
                {/* Sidebar */}
                <div className={`fixed top-16 left-0 w-64 overflow-y-auto h-[100vh]
                               bg-gray-200 px-5 py-6 z-40 transform transition-transform
                                duration-300 shadow-lg sm:translate-x-0 sm:static sm:block 
                                 ${isOpen ? "translate-x-0" : "-translate-x-full"}
                                        sm:translate-x-0 sm:static sm:block `}
  
                                        >
        
                    <h1 className="text-xl font-semibold mt-5 mb-2">HTML Tutorial</h1>
                    <ul className="space-y-1 text-sm">   
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('What')}>What is HTML ?</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('How')}>How HTML Works on browser </li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Basics')}>HTML Basics</li>  
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Elements')}>HTML Elements</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('List')}>HTML List</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Comments')}>HTML Comments</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Entities')}>HTML Entities</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Tags')}>HTML 5 Tags</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Headings')}>HTML Headings</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Paragraphs')}>HTML Paragraphs</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Formating')}>HTML Text Formating</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Links')}>HTML Links and Anchors</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Images')}>HTML Images</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Table')}>HTML Table</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Colour')}>HTML Colour</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Block')}>HTML Block Vs Inline</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Title')}>HTML Page Title</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Div')}>HTML Div</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Class')}>HTML Class</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Id')}>HTML Id</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Iframe')}>HTML Iframe</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('JavaScript')}>HTML JavaScript</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('FilePath')}>HTML File Path</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Head')}>HTML Head</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Layout')}>HTML Layout</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Emojis')}>HTML Emojis</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Symbols')}>HTML Symbols</li>
                    <li className='hover:cursor-pointer' onClick={()=> setshowpage('Responsive')}>HTML Responsive</li>
                    </ul>

        
                    <h1 className="text-xl font-semibold mt-5 mb-2">HTML Media</h1>
                    <ul className='space-y-2 text-sm'>  
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Media')}>HTML Media</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Video')}>HTML Video</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Audio')}>HTML Audio</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Plugins')}>HTML Plug-ins</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('YouTube')}>HTML YouTube</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">Forms and inputs</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Form')}>HTML Form</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Attributes')}>HTML Form Attributes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('FormElements')}>HTML Form Elements</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('InputeTypes')}>HTML inpute Types</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('InputeAttributes')}>HTML inpute Attributes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('FormAttributes')}>Input Form Attributes</li>
                    </ul>

                    <h1 className="text-xl font-semibold mt-5 mb-2">HTML APIs</h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('WebAPIs')}>HTML Web APIs</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('Geolocation')}>HTML Geolocation</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('DragandDrop')}>HTML Drag and Drop</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('WebStorage')}>HTML Web Storage</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('WebWorker')}>HTML Web Worker</li>
                    </ul>
                    
                     <h1 className="text-xl font-semibold mt-5 mb-2">HTML References </h1>
                    <ul className='space-y-2 text-sm'>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('TagList')}>HTML Tag List</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('ReferencesAttributes')}>HTML Attributes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('GlobalAttributes')}>HTML Global Attributes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLCanvas')}>HTML Canvas </li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLAudio')}>HTML Audio </li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLVideo')}>HTML Video </li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLDoctypes')}>HTML Doctypes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLCharacterSets')}>HTML Character Sets</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLURLEncode')}>HTML URL Encode</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTMLLangCodes')}>HTML Lang Codes</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTTPMessages')}>HTTP Messages</li>
                      <li className='hover:cursor-pointer' onClick={()=> setshowpage('HTTPMethods')}>HTTP Methods</li>
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
        
 export default Html;