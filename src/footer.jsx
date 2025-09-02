import React from "react";

function Footer() {
  return (
    <footer className='text-center bg-gray-400 px-4 py-10 '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className="md:text-center">
            <h3 className='text-2xl font-semibold mb-5 '>Top Tutorials</h3>
            <ul className='space-y-2'>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>HTML Tutorial</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>CSS Tutorial</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>JavaScript Tutorial</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>Bootstrap Tutorial</li>
            </ul>
            </div>

            <div className="md:text-center">
            <h3 className='text-2xl font-semibold mb-5'>Top References</h3>
            <ul className="space-y-2"> 
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>HTML Reference</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>CSS Reference</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>JavaScript Reference</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-200'>Bootstrap Reference</li>
            </ul>
            </div>

            <div className="md:text-center">
            <h3 className='text-2xl font-semibold mb-5'>Top Examples</h3>
            <ul className="space-y-2">
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-250'>  HTML Examples</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-250'>CSS Examples</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-250'>JavaScript Examples</li>
            <li className='hover:cursor-pointer hover:text-white hover:scale-150 transition-transform duration-250'>Bootstrap Examples</li>
            </ul>
            </div>
            

          <div className="mt-10 sm:">
          <h3 className="text-2xl font-medium mb-4">Follow Us</h3>
          <a className="px-2 py-1 text-2xl rounded-full hover:bg-green-50 transition-all duration-200 " href="#"><i class="fa-brands fa-linkedin"></i></a>
          <a className="px-2 py-1 text-2xl rounded-full hover:bg-green-50 transition-all duration-200" href="#"><i class="fa-brands fa-twitter"></i></a>
          <a className="px-2 py-1 text-2xl rounded-full hover:bg-green-50 transition-all duration-200" href="#"><i class="fa-brands fa-instagram"></i></a>
          <a className="px-2 py-1 text-2xl rounded-full hover:bg-green-50 transition-all duration-200" href="#"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
          
          <div className="mt-12">
            <p className="font-medium border-b border-black"> Privacy Policy | About Us | Contact Us</p>
            <p className ="font-sm"> &#169;  CodePoint - 2025 CodePoint.com.All Rights Reserved.</p>
          </div>

        </footer>
      
    )
}

export default Footer;











