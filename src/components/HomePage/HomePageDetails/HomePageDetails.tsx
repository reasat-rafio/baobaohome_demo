import Image from "next/image";
import { motion } from "framer-motion";

interface HomePageDetailsProps {}

export const HomePageDetails: React.FC<HomePageDetailsProps> = ({}) => {
   return (
      <div
         className="grid grid-cols-1 xl:gap-36 lg:grid-cols-2 container mx-auto my-auto px-10 z-10 pt-40  xl:pt-0 lg:pt-44"
         id="home"
      >
         <div className=" m-auto  ">
            <h1 className="text-royal-blue text-7xl font-black py-6 font-title">
               Best School For Your Childs
            </h1>
            <p className="text-text-color py-6">
               Must explain to you how all this mistaken idea of denouncing
               pleasure and praising pain was born and I will give you complete
            </p>
            <div className="py-6 flex justify-items-center items-center gap-5 ">
               <button className="homepage_btn bg-yellow-400 ">
                  Get Started
               </button>
               <button className="homepage_btn bg-royal-blue">
                  Learn More
               </button>
            </div>
         </div>
         <div className="img_container m-auto py-24 xl:py-0  lg:py-0">
            <div className=" relative p-1">
               <Image
                  className="z-30 rounded-full circle_bg"
                  src="/image/roundedcovermain.png"
                  alt="picture"
                  width="550"
                  height="550"
                  layout="intrinsic"
               />
               <div className="rounded-full bg-yellow-400 overflow-hidden absolute top-0 right-6  transform -translate-y-8 ">
                  <Image
                     className="z-0"
                     src="/image/cutegirl.png"
                     alt="picture"
                     width="130"
                     height="130"
                     layout="intrinsic"
                  />
               </div>
               <motion.div
                  className=" absolute top-1/2 right-0 z-30 "
                  initial={{ rotate: 0, x: 30 }}
                  animate={{ rotate: 13 }}
                  transition={{
                     ease: "linear",
                     duration: 3,
                     yoyo: Infinity,
                  }}
               >
                  <Image
                     className=""
                     src="/image/ball.png"
                     alt="picture"
                     width="90"
                     height="90"
                     layout="intrinsic"
                  />
               </motion.div>
               <motion.div
                  className="absolute top-0 left-0 z-0  transform  "
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 13 }}
                  transition={{
                     ease: "linear",
                     duration: 3,
                     yoyo: Infinity,
                  }}
               >
                  <Image
                     className="z-0"
                     src="/image/pencil.png"
                     alt="picture"
                     width="90"
                     height="90"
                     layout="intrinsic"
                  />
               </motion.div>
               <motion.div
                  className=" absolute  bottom-0  right-0  transform translate-y-14 z-30"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 13 }}
                  transition={{
                     ease: "linear",
                     duration: 3,
                     yoyo: Infinity,
                  }}
               >
                  <Image
                     className="z-30"
                     src="/image/triangle.png"
                     alt="picture"
                     width="90"
                     height="90"
                     layout="intrinsic"
                  />
               </motion.div>
               <motion.div
                  className="absolute  bottom-0  left-0  z-30"
                  initial={{ rotate: 0, x: 30 }}
                  animate={{ rotate: 13 }}
                  transition={{
                     ease: "linear",
                     duration: 3,
                     yoyo: Infinity,
                  }}
               >
                  <Image
                     className=""
                     src="/image/trophy.png"
                     alt="picture"
                     width="90"
                     height="90"
                     layout="intrinsic"
                  />
               </motion.div>
            </div>
         </div>
      </div>
   );
};
