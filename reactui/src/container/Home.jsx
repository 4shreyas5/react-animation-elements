import React from "react";
import Navbar from "../components/Navbar";
import ExampleCarousel from "../components/Carousel";
import AnimationGrid from "../components/AnimationGrid";
import Footer from "../components/Footer";

function Home (){
    return(
        <div>
        <Navbar/>
        <ExampleCarousel/> 
        <AnimationGrid/>
        <Footer/>
        </div>
    )
}

export default Home;