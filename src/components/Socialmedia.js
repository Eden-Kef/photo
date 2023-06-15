import React, { useContext } from 'react';
// import icons
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socialmedia = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='sm:mx xl:flex mx-20'
    >
      <ul className='flex gap-x-4 text-gray-200'>
          <li>
          <a href='http://www.mail.com' target='_blank' rel="noreferrer" >
            <HiOutlineMail size ={20}/>
          </a>
        </li> 
        <li>
          <a href='http://www.instagram.com/ed_clear/' target='_blank' rel="noreferrer" >
            <FaInstagram size ={20}/>
          </a>
        </li>
      <li>
          <a href='http://www.facebook.com/EdenKefaleGebreyes/' target='_blank' rel="noreferrer" >
            <FaFacebookF size ={19}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socialmedia;