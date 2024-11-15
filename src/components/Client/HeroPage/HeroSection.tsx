import { AiOutlineSwapRight } from "react-icons/ai";
import Video from "../../../assets/Videos/videoBg.mp4"
import { Button } from "@/components/ui/button";
import  './HeroPage.css'

const HeroSection = () => {
  return (
    <div className="Hero">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 className="font-extrabold text-5xl text-center align-middle">
          Voyagez A Travers les Horizons avec Nous
        </h1>
        <p className='align-middle w-[100%]'>Decouvrez et visitez les merveilles du Continent</p>
        <Button className="bg-blue-800  rounded-xl px-5 py-3 text-center 
        hover:bg-blue-600 font-semibold">
          RESERVEZ
          <AiOutlineSwapRight />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
