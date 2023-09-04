import React, { useContext } from 'react';
//import components
import Socialmedia from './Socialmedia';
import Logo from '../img/header/Logo 3.png';
import MobileNav from './MobileNav';
//import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className='absolute w-full pr-[40px] lg:px-[0px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='flex flex-col lg:flex-row lg:items-center w-full justify-between '>

{/*Logo Section*/}
  <Link to={'/'} className='max-w-[200px]'>
    <img src={Logo} alt ='logo'></img>
  </Link> 

{/* initially hidden show on desktop view*/}
    <nav 
        className='hidden xl:flex gap-x-12 font-semibold ' >
        <Link to = {'/'} className='text-white hover:text-accent 
        transition'> Home 
        </Link>
        <Link to = {'/about '} className='text-white hover:text-accent
        transition'> About 
        </Link>
        <Link to = {'/portfolio'} className='text-white hover:text-accent 
        transition'> Portfolio 
        </Link> 
         <Link to = {'/blog'} className='text-white hover:text-accent 
        transition'> Blog 
        </Link>
        <Link to = {'/contact'} className='text-white hover:text-accent 
        transition'> Contact 
        </Link>
      
    </nav>
    </div>
  {/*Socialmedia*/}
    <Socialmedia/>
  {/*mobile nav*/}
  <MobileNav/>
    </header>
    
  );
};

export default Header;
