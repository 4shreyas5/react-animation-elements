import React from 'react'
import Navbar from "../components/Navbar"
import { Carousel } from "@material-tailwind/react";
import { Paper } from '@mui/material';

 function SC3(){
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
          <Paper sx={{ maxHeight: '400px', maxWidth: '350px', overflow: 'auto' }}>
      <div className='bg-gray-900 text-white h-full' style={{ padding: '16px' }}>
        <h2 className=' text-red-500 font-bold text-xl ' >HTML</h2>
        <p className='text-start'>
        &lt;div class="flip-card"&gt;<br/>
    &lt;div class="flip-card-inner"&gt;<br/>
        &lt;div class="flip-card-front"&gt;<br/>
            &lt;p class="title"&gt;FLIP CARD&lt;/p&gt;<br/>
            &lt;p&gt;Hover Me&lt;/p&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div class="flip-card-back"&gt;<br/>
            &lt;p class="title"&gt;BACK&lt;/p&gt;<br/>
            &lt;p&gt;Leave Me&lt;/p&gt;<br/>
        &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
&lt;/div&gt;<br/>
        </p>
      </div>
    </Paper>
    <Paper sx={{ maxHeight: '400px', maxWidth: '350px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl '>CSS</h2>
        <p className='text-start'>
        &lt;style&gt;
.flip-card &#123;
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
&#125;

.title &#123;
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
&#125;

.flip-card-inner &#123;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
&#125;

.flip-card:hover .flip-card-inner &#123;
  transform: rotateY(180deg);
&#125;

.flip-card-front, .flip-card-back &#123;
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
&#125;

.flip-card-front &#123;
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
&#125;

.flip-card-back &#123;
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
&#125;
&lt;/style&gt;
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
 export default SC3;