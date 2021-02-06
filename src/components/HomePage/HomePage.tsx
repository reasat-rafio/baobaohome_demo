import { Navbar } from "../navBar/Navbar";

import { useEffect, useRef } from "react";
import { useClientSize } from "../../utils/hooks/useResizer";
import { HomePageDetails } from "./HomePageDetails/HomePageDetails";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
   const sectionRef = useRef<any>();

   const { height } = useClientSize(sectionRef);

   return (
      <section
         ref={sectionRef}
         className="home transition-all duration-300 min-h-screen flex justify-items-center items-center "
      >
         <Navbar height={height} />
         <HomePageDetails />
      </section>
   );
};

export default Home;
