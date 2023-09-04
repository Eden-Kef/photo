import React from 'react';
import { Link } from 'react-router-dom';
import { TbCopyright } from "react-icons/tb";

const Footer = () => {
    return (
      <div 
      className="md-h-screen w-full py-2 items-center justify-center text-white bg-gradient-to-lr from-indigo-950 via-slate-950 to-black">
         <Link className= "group font-thin text-slate-300 w-fit flex items-center justify-center cursor-pointer mx-auto">
              <span className="group">
                <TbCopyright size={20} className="mr-2"/>
              </span>  
                 2023 Eden Kefale 
          </Link>       

          </div>
    )
  }
  
  export default Footer;