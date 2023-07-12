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
          <Paper sx={{ maxHeight: '400px',maxWidth: '350px', overflow: 'auto' }}>
      <div className='bg-gray-900 text-white ' style={{ padding: '16px' }}>
        <h2 className=' text-red-500 font-bold text-xl ' >HTML</h2>
        <p className='text-start'>
  &lt;button class=&quot;sparkle-button&quot;&gt;
    &lt;span class=&quot;spark&quot;&gt;&lt;/span&gt;
    
    &lt;span class=&quot;backdrop&quot;&gt;&lt;/span&gt;
    &lt;svg class=&quot;sparkle&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
      &lt;path d=&quot;M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z&quot; fill=&quot;black&quot; stroke=&quot;black&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;&gt;&lt;/path&gt;
      &lt;path d=&quot;M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z&quot; fill=&quot;black&quot; stroke=&quot;black&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;&gt;&lt;/path&gt;
      &lt;path d=&quot;M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.

        </p>
      </div>
    </Paper>
    <Paper sx={{ maxHeight: '400px',maxWidth: '350px', overflow: 'auto' }}>
      <div className="bg-gray-900 text-white" style={{ padding: '16px' }}>
        <h2 className=' text-cyan-500 font-bold text-xl'>CSS</h2>
        <p className='text-start'>
        .sparkle-button &#123;<br/>
    &nbsp;&nbsp;--active: 0;<br/>
    &nbsp;&nbsp;--bg: radial-gradient(<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;40% 50% at center 100%,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hsl(270 calc(var(--active) * 97%) 72% / var(--active)),<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;transparent<br/>
    &nbsp;&nbsp;),<br/>
    &nbsp;&nbsp;radial-gradient(<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;80% 100% at center 120%,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hsl(260 calc(var(--active) * 97%) 70% / var(--active)),<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;transparent<br/>
    &nbsp;&nbsp;),<br/>
    &nbsp;&nbsp;hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%));<br/>
    &nbsp;background: var(--bg);<br/>
    &nbsp;font-size: 1.2rem;<br/>
    &nbsp;font-weight: 500;<br/>
    &nbsp;border: 0;<br/>
    &nbsp;cursor: pointer;<br/>
    &nbsp;padding: 1em 1em;<br/>
    &nbsp;display: flex;<br/>
    &nbsp;align-items: center;<br/>
    &nbsp;gap: 0.25em;<br/>
    &nbsp;white-space: nowrap;<br/>
    &nbsp;border-radius: 100px;<br/>
    &nbsp;position: relative;<br/>
    &nbsp;box-shadow: 0 0 calc(var(--active) * 3em) calc(var(--active) * 1em) hsl(260 97% 61% / 0.75),<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;0 0em 0 0 hsl(260 calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;0 -0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc(var(--active) * 60%)) inset;<br/>
    &nbsp;transition: box-shadow var(--transition), scale var(--transition), background var(--transition);<br/>
    &nbsp;scale: calc(1 + (var(--active) * 0.1));<br/>
    &nbsp;transition: .3s;<br/>
  &#125;<br/>
  
  .sparkle-button:active &#123;<br/>
    &nbsp;scale: 1;<br/>
    &nbsp;transition: .3s;<br/>
  &#125;<br/>
  
  .sparkle path &#123;<br/>
    &nbsp;color: hsl(0 0% calc((var(--active, 0) * 70%) + var(--base)));<br/>
    &nbsp;transform-box: fill-box;<br/>
    &nbsp;transform-origin: center;<br/>
    &nbsp;fill: currentColor;<br/>
    &nbsp;stroke: currentColor;<br/>
    &nbsp;animation-delay: calc((var(--transition) * 1.5) + (var(--delay) * 1s));<br/>
    &nbsp;animation-duration: 0.6s;<br/>
    &nbsp;transition: color var(--transition);<br/>
  &#125;<br/>
  
  .sparkle-button:is(:hover, :focus-visible) path &#123;<br/>
    &nbsp;animation-name: bounce;<br/>
  &#125;<br/>
  
  @keyframes bounce &#123;<br/>
    &nbsp;35%, 65% &#123;<br/>
      &nbsp;&nbsp;scale: var(--scale);<br/>
    &nbsp;&#125;<br/>
  &#125;<br/>
  
  .sparkle path:nth-of-type(1) &#123;<br/>
    &nbsp;--scale: 0.5;<br/>
    &nbsp;--delay: 0.1;<br/>
    &nbsp;--base: 40%;<br/>
  &#125;<br/>
  
  .sparkle path:nth-of-type(2) &#123;<br/>
    &nbsp;--scale: 1.5;<br/>
    &nbsp;--delay: 0.2;<br/>
    &nbsp;--base: 20%;<br/>
  &#125;<br/>
  
  .sparkle path:nth-of-type(3) &#123;<br/>
    &nbsp;--scale: 2.5;<br/>
    &nbsp;--delay: 0.35;<br/>
    &nbsp;--base: 30%;<br/>
  &#125;<br/>
  
  .sparkle-button:before &#123;<br/>
    &nbsp;content: "";<br/>
    &nbsp;position: absolute;<br/>
    &nbsp;inset: -0.2em;<br/>
    &nbsp;z-index: -1;<br/>
    &nbsp;border: 0.25em solid hsl(260 97% 50% / 0.5);<br/>
    &nbsp;border-radius: 100px;<br/>
    &nbsp;opacity: var(--active, 0);<br/>
    &nbsp;transition: opacity var(--transition);<br/>
  &#125;<br/>
  
  .spark &#123;<br/>
    &nbsp;position: absolute;<br/>
    &nbsp;inset: 0;<br/>
    &nbsp;border-radius: 100px;<br/>
    &nbsp;rotate: 0deg;<br/>
    &nbsp;overflow: hidden;<br/>
    &nbsp;mask: linear-gradient(white, transparent 50%);<br/>
    &nbsp;animation: flip calc(var(--spark) * 2) infinite steps(2, end);<br/>
  &#125;<br/>
  
  @keyframes flip &#123;<br/>
    &nbsp;to &#123;<br/>
      &nbsp;&nbsp;rotate: 360deg;<br/>
    &nbsp;&#125;<br/>
  &#125;<br/>
  
  .spark:before &#123;<br/>
    &nbsp;content: "";<br/>
    &nbsp;position: absolute;<br/>
    &nbsp;width: 200%;<br/>
    &nbsp;aspect-ratio: 1;<br/>
    &nbsp;top: 0%;<br/>
    &nbsp;left: 50%;<br/>
    &nbsp;z-index: -1;<br/>
    &nbsp;translate: -50% -15%;<br/>
    &nbsp;rotate: 0;<br/>
    &nbsp;transform: rotate(-90deg);<br/>
    &nbsp;opacity: calc((var(--active)) + 0.4);<br/>
    &nbsp;background: conic-gradient(<br/>
    &nbsp;&nbsp;from 0deg,<br/>
    &nbsp;&nbsp;transparent 0 340deg,<br/>
    &nbsp;&nbsp;white 360deg<br/>
    &nbsp;);<br/>
    &nbsp;transition: opacity var(--transition);<br/>
    &nbsp;animation: rotate var(--spark) linear infinite both;<br/>
  &#125;<br/>
  
  .spark:after &#123;<br/>
    &nbsp;content: "";<br/>
    &nbsp;position: absolute;<br/>
    &nbsp;inset: var(--cut);<br/>
    &nbsp;border-radius: 100px;<br/>
  &#125;<br/>
  
  .backdrop &#123;<br/>
    &nbsp;position: absolute;<br/>
    &nbsp;inset: var(--cut);<br/>
    &nbsp;background: var(--bg);<br/>
    &nbsp;border-radius: 100px;<br/>
    &nbsp;transition: background var(--transition);<br/>
  &#125;<br/>
  
  @keyframes rotate &#123;<br/>
    &nbsp;to &#123;<br/>
      &nbsp;&nbsp;transform: rotate(90deg);<br/>
    &nbsp;&#125;<br/>
  &#125;<br/>
  
  @supports(selector(:has(:is(+ *)))) &#123;<br/>
    &nbsp;body:has(button:is(:hover, :focus-visible)) &#123;<br/>
      &nbsp;&nbsp;--active: 1;<br/>
      &nbsp;&nbsp;--play-state: running;<br/>
    &nbsp;&#125;<br/>
  
    &nbsp;.bodydrop &#123;<br/>
      &nbsp;&nbsp;display: none;<br/>
    &nbsp;&#125;<br/>
  &#125;<br/>
  
  .sparkle-button:is(:hover, :focus-visible) ~ :is(.bodydrop, .particle-pen) &#123;<br/>
    &nbsp;--active: 1;<br/>
    &nbsp;--play-state: runnin;<br/>
  &#125;<br/>
  
  .sparkle-button:is(:hover, :focus-visible) &#123;<br/>
    &nbsp;--active: 1;<br/>
    &nbsp;--play-state: running;<br/>
  &#125;<br/>
  
  .sp &#123;<br/>
    &nbsp;position: relative;<br/>
  &#125;<br/>
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