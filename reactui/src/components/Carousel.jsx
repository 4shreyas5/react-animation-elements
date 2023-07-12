import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function ExampleCarousel() {
  return (
    <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <img
          src="https://thumbs.gfycat.com/DependableHeavenlyKentrosaurus-size_restricted.gif"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome Developer !!!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Welcome to the React Animated UI-Elements Marketplace 
              <div className="font-bold">Happy Shopping!!!</div>
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/payment">
              <Button size="lg" color="white" >
                Donate Now!
              </Button>
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </Carousel>
  );
}