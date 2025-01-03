import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide_1 from "../assets/Banner/slide-1.png";
import slide_2 from "../assets/Banner/slide-2.png";
import slide_3 from "../assets/Banner/slide-3.png";
import slide_4 from "../assets/Banner/slide-4.png";
import slide_5 from "../assets/Banner/slide-5.png";
import slide_6 from "../assets/Banner/slide-6.png";
export const Banner = () => {
  return (
    <Carousel >
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-40"></div>
        <img src={slide_1} className="h-full w-full object-center " />
        <div className="absolute z-10">
          <h1 className="text-5xl font-extrabold font-nunito text-blue-50">
          From The Sea To Your Plate: A Soulful Seafood Experience.
          </h1>
        </div>
      </div>
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-40"></div>
        <img src={slide_2} className="h-full w-full object-center " />
        <p className="legend">Legend 2</p>
      </div>
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-40"></div>
        <img src={slide_3} className="h-full w-full object-center " />
        <p className="legend">Legend 3</p>
      </div>
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-50"></div>
        <img src={slide_4} className="h-full w-full object-center " />
        <p className="legend">Legend 3</p>
      </div>
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-50"></div>
        <img src={slide_5} className="h-full w-full object-center " />
        <p className="legend">Legend 3</p>
      </div>
      <div className="h-[550px] relative">
        <div className="absolute h-full w-full bg-black bg-opacity-40"></div>
        <img src={slide_6} className="h-full w-full object-center " />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
