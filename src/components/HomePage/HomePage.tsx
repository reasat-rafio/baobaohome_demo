import { Navbar } from "../navBar/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useClientSize } from "../../utils/hooks/useResizer";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
   const sectionRef = useRef<any>();

   const { height } = useClientSize(sectionRef);

   return (
      <section
         ref={sectionRef}
         className="home  transition-all duration-300 w-full "
      >
         <Navbar height={height} />
         <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-44 container mx-auto">
            <div>
               <h1 className="text-royal-blue text-7xl font-black font-sans">
                  Bao Bao Home Tutor
               </h1>
               <p className="text-text-color">
                  We'll provide your babies with a head start in chinese
                  language education.
               </p>
               <div>
                  <button>Get Started</button>
                  <button>Learn More</button>
               </div>
            </div>
            <div>
               <div className="">
                  <Image
                     src="/image/roundedcovermain.png"
                     alt="picture"
                     width="500"
                     height="500"
                     layout="intrinsic"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
