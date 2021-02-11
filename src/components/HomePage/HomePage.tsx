import { Navbar } from "../navBar/Navbar";

import { useRef } from "react";
import { useClientSize, useResize } from "../../utils/hooks/useResizer";
import { HomePageDetails } from "./HomePageDetails/HomePageDetails";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
   const sectionRef = useRef<any>();

   const { height } = useClientSize(sectionRef);
   const { width } = useResize(sectionRef);

   return (
      <section
         ref={sectionRef}
         className="home transition-all duration-300 min-h-screen flex justify-items-center items-center "
      >
         <Navbar height={height} width={width} />
         <HomePageDetails />
      </section>
   );
};

export default Home;
