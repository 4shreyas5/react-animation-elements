import { Carousel } from "@material-tailwind/react";
 
export default function ExampleCarouselSC() {
  return (
    <Carousel className="rounded-none">
      <div className="relative h-full w-full">
        <img
          src="https://thumbs.gfycat.com/DependableHeavenlyKentrosaurus-size_restricted.gif"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
           
          
          </div>
        </div>
      </div>
    </Carousel>
  );
}