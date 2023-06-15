import React, {useContext} from 'react';
//import images
import Image1 from '../img/portfolio/austin.jpg';
import Image2 from '../img/portfolio/prim.jpg';
import Image3 from '../img/portfolio/sm.jpg';
import Image4 from '../img/portfolio/sm1.jpg';
import Image9 from '../img/portfolio/emni.jpg';

/*import Image5 from '../img/portfolio/Img7.png';
import Image6 from '../img/portfolio/sm.jpg';
import Image7 from '../img/portfolio/Img16.png';
import Image8 from '../img/portfolio/keem.png';
import Image9 from '../img/portfolio/emni.jpg';
import Image10 from '../img/portfolio/Img5.png';
import Image11 from '../img/portfolio/Img2.png';
import Image12 from '../img/portfolio/Img10.png';
import Image13 from '../img/portfolio/Img12.png';
import Image14 from '../img/portfolio/austin.jpg';
import Image15 from '../img/portfolio/sm1.jpg';
import Image16 from '../img/portfolio/Img1.png';
import Image17 from '../img/portfolio/hand.png';
import Image18 from '../img/portfolio/hani.png';
import Image19 from '../img/portfolio/fetela.png';
import Image20 from '../img/portfolio/Img18.png';*/
//import Link
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';


const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const photos = [
    {
        id:1,
        imgSrc:Image1
    },
    {
        id:2,
        imgSrc:Image2
    },
    {
        id:3,
        imgSrc:Image3
    },
    {
        id:4,
        imgSrc:Image4
    },
    {
      id:9,
      imgSrc:Image9
    },
  {/*{
        id:5,
        imgSrc:Image5
    },
    {
        id:6,
        imgSrc:Image6
    },
    {
      id:7,
      imgSrc:Image7
    },
    {
      id:8,
      imgSrc:Image8
    },
 
    {
      id:10,
      imgSrc:Image10
    },
    {
      id:11,
      imgSrc:Image11
    },
    {
      id:12,
      imgSrc:Image12,
    },
    {
      id:13,
      imgSrc:Image13,
    },
    {
      id:14,
      imgSrc:Image14,
    },
    {
      id:15,
      imgSrc:Image15,
    },
    {
      id:16,
      imgSrc:Image16,
    },
    {
      id:17,
      imgSrc:Image17,
    },
    {
      id:18,
      imgSrc:Image18,
    },
    {
      id:19,
      imgSrc:Image19,
    },
    {
      id:20,
      imgSrc:Image20,
    }*/}
]

  return (
  

<div className='px-24 mx-auto h-full relative bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
<div className='flex flex-col lg:flex-col h-full items-center justify-start gap-x-24 text-center lg:text-center pt-24 lg:pt-36 pb-8'>
 {/* title */}
 <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 1.9 }}
     variants={{
       hidden: { opacity: 0, x: 50 },
       visible: { opacity: 1, x: 0 },
     }}
   className='lg:flex-1 px-4' >
<h1 className='h1 text-white sm:text-7xl items-center font-bold mb-20'>Portfolio</h1>

  </motion.div>
     {/* image grid */}
  <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}
  className = 'md:columns-3 gap-3 md:w-[1200px] mx-auto space-y-3 pb-8 '>
{photos.map(({ id, imgSrc }) => (
<div key={id}>
              <img src={imgSrc} onClick={() => (id.imgSrc)}
                className='h-fit lg:h-fit hover:scale-110 transition-all duration-500 bg-slate-400'
                alt=''
              />
            </div>
))}
</motion.div>     
  {/* link */}
  <Link to = {'/contact'} 
   onMouseEnter={mouseEnterHandler}
   onMouseLeave={mouseLeaveHandler}
   className='rounded mb-[30px] py-3 my-5 mx-auto lg:mx-0 w-fit px-10 flex items-center text-white bg-sky-900 cursor-pointer to-blur-900'>
    HIRE ME
  </Link>
   </div>      
   <Footer/>
   </div>

  );
};

export default Portfolio;