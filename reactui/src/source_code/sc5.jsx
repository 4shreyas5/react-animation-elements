import React from 'react'
import Navbar from "../components/Navbar"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Paper } from '@mui/material';

 function SC5(){
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
    <Paper sx={{ maxHeight: '400px', maxWidth: '350px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white h-full" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl '>CSS</h2>
        <p className='text-start'>
        The code is exclusive for Donators :<br/>
    Email: shreyassingh126@gmail.com <br/>
    To Get the code
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
 export default SC5;