import React from 'react'
import Navbar from "../components/Navbar"
import { Carousel } from "@material-tailwind/react";
import { Paper } from '@mui/material';

 function SC1(){
    return(
        <div className=''>
            <Navbar/>
            <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <img
          src="https://thumbs.gfycat.com/DependableHeavenlyKentrosaurus-size_restricted.gif"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 flex">
            <p className='text-white text-4xl font-extrabold -mb-20 text-amber-400 '>Source Code</p>
          <div className=" flex gap-12 w-3/4 text-center md:w-2/4">
          <Paper sx={{ maxHeight: '400px',maxWidth: '350px', overflow: 'auto' }}>
      <div className='bg-gray-900 h-screen text-white ' style={{ padding: '16px' }}>
        <h2 className=' text-red-500 font-bold text-xl  ' >HTML</h2>
        <p className='text-start'>
    &lt;div class="pyramid-loader -ml-4 "&gt;<br/>
    &nbsp;&nbsp;&lt;div class="wrapper"&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="side side1"&gt;&lt;/span&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="side side2"&gt;&lt;/span&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="side side3"&gt;&lt;/span&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="side side4"&gt;&lt;/span&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="shadow"&gt;&lt;/span&gt;<br/>
    &nbsp;&nbsp;&lt;/div&gt;  <br/>
  &lt;/div&gt;  
 
        </p>
      </div>
    </Paper>
    <Paper sx={{ maxHeight: '400px',maxWidth: '350px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl '>CSS</h2>
        <div>
        <p className='text-start'>
        .pyramid-loader &#123;<br/>
    &nbsp;&nbsp;position: relative;<br/>
    &nbsp;&nbsp;width: 300px;<br/>
    &nbsp;&nbsp;height: 300px;<br/>
    &nbsp;&nbsp;display: block;<br/>
    &nbsp;&nbsp;transform-style: preserve-3d;<br/>
    &nbsp;&nbsp;transform: rotateX(-20deg);<br/>
  &#125;<br/>
  
  .wrapper &#123;<br/>
    &nbsp;&nbsp;position: relative;<br/>
    &nbsp;&nbsp;width: 100%;<br/>
    &nbsp;&nbsp;height: 100%;<br/>
    &nbsp;&nbsp;transform-style: preserve-3d;<br/>
    &nbsp;&nbsp;animation: spin 4s linear infinite;<br/>
  &#125;<br/>
  
  @keyframes spin &#123;<br/>
    &nbsp;&nbsp;100% &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;transform: rotateY(360deg);<br/>
    &nbsp;&nbsp;&#125;<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .side &#123;<br/>
    &nbsp;&nbsp;width: 70px;<br/>
    &nbsp;&nbsp;height: 70px;<br/>
    &nbsp;&nbsp;/* you can choose any gradient or color you want */<br/>
    &nbsp;&nbsp;/* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */<br/>
    &nbsp;&nbsp;position: absolute;<br/>
    &nbsp;&nbsp;top: 0;<br/>
    &nbsp;&nbsp;left: 0;<br/>
    &nbsp;&nbsp;right: 0;<br/>
    &nbsp;&nbsp;bottom: 0;<br/>
    &nbsp;&nbsp;margin: auto;<br/>
    &nbsp;&nbsp;transform-origin: center top;<br/>
    &nbsp;&nbsp;clip-path: polygon(50% 0%, 0% 100%, 100% 100%);<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .side1 &#123;<br/>
    &nbsp;&nbsp;transform: rotateZ(-30deg) rotateY(90deg);<br/>
    &nbsp;&nbsp;background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .side2 &#123;<br/>
    &nbsp;&nbsp;transform: rotateZ(30deg) rotateY(90deg);<br/>
    &nbsp;&nbsp;background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .side3 &#123;<br/>
    &nbsp;&nbsp;transform: rotateX(30deg);<br/>
    &nbsp;&nbsp;background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .side4 &#123;<br/>
    &nbsp;&nbsp;transform: rotateX(-30deg);<br/>
    &nbsp;&nbsp;background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);<br/>
  &#125;<br/>
  
  .pyramid-loader .wrapper .shadow &#123;<br/>
    &nbsp;&nbsp;width: 60px;<br/>
    &nbsp;&nbsp;height: 60px;<br/>
    &nbsp;&nbsp;background: #8B5AD5;<br/>
    &nbsp;&nbsp;position: absolute;<br/>
    &nbsp;&nbsp;top: 0;<br/>
    &nbsp;&nbsp;left: 0;<br/>
    &nbsp;&nbsp;right: 0;<br/>
    &nbsp;&nbsp;bottom: 0;<br/>
    &nbsp;&nbsp;margin: auto;<br/>
    &nbsp;&nbsp;transform: rotateX(90deg) translateZ(-40px);<br/>
    &nbsp;&nbsp;filter: blur(12px);<br/>
  &#125;<br/>
        </p>
        </div>

      </div>
    </Paper>         
          </div>
        </div>
      </div>
    </Carousel>


        </div>
    )
 }
 export default SC1;