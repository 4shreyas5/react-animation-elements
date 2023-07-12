import React from 'react'
import Navbar from "../components/Navbar"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Paper } from '@mui/material';

 function SC4(){
    return(
        <div className=''>
            <Navbar/>
            <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <img
          src="https://thumbs.gfycat.com/DependableHeavenlyKentrosaurus-size_restricted.gif"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 flex">
            <p className='text-white text-4xl font-extrabold -mb-20 text-amber-400 '>Source Code</p>
          <div className=" flex gap-12 w-3/4 text-center md:w-2/4">
          <Paper sx={{ maxHeight: '400px', maxWidth: '350px', overflow: 'auto' }}>
      <div className='bg-gray-900 text-white h-full' style={{ padding: '16px' }}>
        <h2 className=' text-red-500 font-bold text-xl ' >HTML</h2>
        <p className='text-start'>
          The code is exclusive for Donators :<br/>
    Email: shreyassingh126@gmail.com <br/>
    To Get the code
        </p>
      </div>
    </Paper>
    <Paper sx={{ maxHeight: '400px',  maxWidth: '350px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl '>CSS</h2>
        <p className='text-start'>
        .svg-frame &#123;
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
  &#125;
  
  .svg-frame svg &#123;
    position: absolute;
    transition: .5s;
    z-index: calc(1 - (0.2 * var(--j)));
    transform-origin: center;
    width: 344px;
    height: 344px;
    fill: none;
  &#125;
  
  .svg-frame:hover svg &#123;
    transform: rotate(-80deg) skew(30deg) translateX(calc(45px * var(--i))) translateY(calc(-35px * var(--i)));
  &#125;
  
  .svg-frame svg #center &#123;
    transition: .5s;
    transform-origin: center;
  &#125;
  
  .svg-frame:hover svg #center &#123;
    transform: rotate(-30deg) translateX(45px) translateY(-3px);
  &#125;
  
  #out2 &#123;
    animation: rotate16 7s ease-in-out infinite alternate;
    transform-origin: center;
  &#125;
  
  #out3 &#123;
    animation: rotate16 3s ease-in-out infinite alternate;
    transform-origin: center;
    stroke: #ff0;
  &#125;
  
  #inner3,
  #inner1 &#123;
    animation: rotate16 4s ease-in-out infinite alternate;
    transform-origin: center;
  &#125;
  
  #center1 &#123;
    fill: #ff0;
    animation: rotate16 2s ease-in-out infinite alternate;
    transform-origin: center;
  &#125;
  
  @keyframes rotate16 &#123;
    to &#123;
      transform: rotate(360deg);
    &#125;
  &#125;
        </p>
      </div>
    </Paper>         
          </div>
        </div>
      </div>
    </Carousel>


        </div>
    )
 }
 export default SC4;