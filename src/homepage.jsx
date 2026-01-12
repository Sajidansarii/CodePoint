import React from "react";
import {Typewriter} from 'react-simple-typewriter';
import { useNavigate } from "react-router-dom";

const homepage = ()=> {
  const navigate = useNavigate();

    const section =[ {
    title: "HTML",
    decs: "The language creating web page.",
    button1: "HTML Tutorial",
    image: "./public/htm5.png",
    path:"/Component/HTML-Section/HtmlPages"
    
  },{
    title: "CSS",
    decs: "The language for styling web pages.",
    button1: "CSS Tutorial",
    image: "./public/css3.png",
    path:"/Component/CSS-Section/CssPages"
},{
  title: "JavaScript",
  decs: "The language for programming web pages.",
  button1: "JavaScript Tutorial",
  image: "./public/javascript-logo.svg",
  path: "/Component/JavaScript-Section/JavaScriptPages",
},{
  // title: "Bootstrap",
  // decs: "A CSS framework for designing better web pages.",
  // button1: "Bootstrap Tutorial",
  // image: "./public/Bootstrap.png",
  // path:'',
},{
  title: "React",
  decs: "A JavaScript framework for building better web pages.",
  button1: "React Tutorial",
  image: "./public/React.png",
  path:"./Component/React/React-Pages",
}
  ]
  
    return (
      <div className='px-4 py-8'>
         {/*Hero section  */}
        <div className='text-center mb-20 sm:mb-32 lg:mb-40'>
          <h1 className='font-semibold text-3xl sm:text-3xl md:text-4xl mt-20 sm:mt-32 lg:mt-40'>
            Master Web Development With CodePoint.</h1>
          <p className="font-semibold text-3xl sm:text-4xl mt-5">Learn 
            <span className="text-green-600">

          <Typewriter 
                     words={[' HTML', ' CSS', ' JavaScript', ' Bootstrap', ' React']}
                      loop={true}
                      cursor cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={1000}
                      />
                      </span>
                      </p>
                      
                     <div className="mt-20"> 
          <h2 className="text-3xl font-semibold">Welcome to CodePoint</h2>
          <p className="text-xl mt-3 md:max-w-5xl max-w-[90%] mx-auto">At the Codepoint.com you can learn the essentials of web Development
            technologies from the basic to advanced topics, along with real life 
            practice examples and usefull references, so that you can create your own
            website or build career in web development. Here you will find.
          </p>
          </div>
          </div> 
          {/* Technology Section */}
          {section.map((sec, index) =>(
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          } items-center justify-between gap-8 mb-20`}
        >
          {/* Card */}
          <div className="lg:w-[50%] mx-4 sm:mx-8 md:mx-16 lg:mx-32 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4">{sec.title}</h2>
            <p className="text-lg text-center mb-6">{sec.decs}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:text-black font-medium transition"
              onClick={()=>{navigate(sec.path)}}>
                {sec.button1}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
           <img
               src={sec.image}
               alt={sec.title}
               className={`object-contain
                 ${
               sec.title === "JavaScript" || sec.title === "React"
               ? "h-20 w-[45%] sm:h-64"
               : "h-20 sm:h-64"
           }`
          }
            />
          </div>
        </div>
      ))}
      
      <div className="text-center">
            <h3 className='text-3xl sm:text-4xl font-semibold mb-5'>Why Should Choose CodePoint !</h3>
            <ul className="space-y-2">
            <li className='hover:cursor-pointer text-2xl sm:text-2xl'>Hands On Practice</li>
            <li className='hover:cursor-pointer text-2xl sm:text-2xl'>Beginner Friendly</li>
            <li className='hover:cursor-pointer text-2xl sm:text-2xl'>NO Login Required</li>
            </ul>
            </div>
        </div>
)}

export default homepage;
