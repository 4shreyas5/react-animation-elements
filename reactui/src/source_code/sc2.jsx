import React from 'react'
import Navbar from "../components/Navbar"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Paper } from '@mui/material';

 function SC2(){
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
          <Paper sx={{ maxHeight: '400px', overflow: 'auto' }}>
      <div className='bg-gray-900 text-white ' style={{ padding: '16px' }}>
        <h2 className=' text-red-500 font-bold text-xl ' >HTML</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus rhoncus, commodo ex non,
          ullamcorper leo. Nullam varius enim vel enim consectetur, vitae bibendum quam sodales. Donec volutpat
          turpis in tempor sagittis. Duis ultrices risus in mi posuere, id ullamcorper est rhoncus. Sed bibendum
          mi at dolor tincidunt, vitae fermentum ligula rutrum. Ut in ipsum turpis. Proin efficitur ligula et
          fermentum ullamcorper. Maecenas pretium iaculis sapien id laoreet. Integer vel diam et eros iaculis
          aliquet vitae a metus. Phasellus et nulla ipsum. Sed commodo lacus ut dapibus tempus. Integer interdum
          fermentum volutpat. Pellentesque eleifend mi vitae erat congue bibendum. Nulla nec ultrices erat, vel
          vulputate tortor.
        </p>
      </div>
    </Paper>
    <Paper sx={{ maxHeight: '400px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl '>CSS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus rhoncus, commodo ex non,
          ullamcorper leo. Nullam varius enim vel enim consectetur, vitae bibendum quam sodales. Donec volutpat
          turpis in tempor sagittis. Duis ultrices risus in mi posuere, id ullamcorper est rhoncus. Sed bibendum
          mi at dolor tincidunt, vitae fermentum ligula rutrum. Ut in ipsum turpis. Proin efficitur ligula et
          fermentum ullamcorper. Maecenas pretium iaculis sapien id laoreet. Integer vel diam et eros iaculis
          aliquet vitae a metus. Phasellus et nulla ipsum. Sed commodo lacus ut dapibus tempus. Integer interdum
          fermentum volutpat. Pellentesque eleifend mi vitae erat congue bibendum. Nulla nec ultrices erat, vel
          vulputate tortor.
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
 export default SC2;