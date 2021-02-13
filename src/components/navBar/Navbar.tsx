import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface NavbarProps {
   height: number;
   width: number;
}

const containerVariants = {
   hidden: {
      opacity: 0,
      y: "-50%",
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", ease: "easeInOut" },
   },
   exit: {
      y: "-100%",
      transition: { ease: "easeInOut" },
   },
};

export const Navbar: React.FC<NavbarProps> = ({ height, width }) => {
   const [dropdown, setDorpdown] = useState<boolean>(false);
   const [url, setUrl] = useState<string>("");

   const router = useRouter();

   useEffect(() => {
      if (width > 1265) {
         setDorpdown(false);
      }
   }, [width]);

   useEffect(() => {
      var type = window.location.hash;
      setUrl(type);
   }, [height]);

   return (
      <nav
         className={`fixed w-full transition-all duration-300 z-50 ${
            height != 0 ? "top-0" : "top-8"
         } `}
      >
         <div
            className={` grid grid-cols-8 bg-white px-6 place-items-center transition-all duration-300 rounded-b-md  rounded-t-md  container mx-auto ${
               height != 0 ? "py-2 shadow-lg" : "py-7"
            }`}
         >
            <div className="col-span-1">
               <a href="">
                  <img
                     className="w-auto transition-all h-8"
                     src="/image/logo.png"
                     alt=""
                  />
               </a>
            </div>

            <ul className="list-none col-span-5 hidden  2xl:flex xl:flex  ">
               <li className="nav_li">
                  <a className="nav_a" href="#home">
                     {url === "#home" && <div className="active_nav" />}
                     <span className="z-50">Home</span>
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#about_us">
                     {url === "#about_us" && <div className="active_nav" />}
                     <span> About Us</span>
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#choose_us">
                     {url === "#choose_us" && <div className="active_nav" />}
                     <span> Choose Us</span>
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#experience">
                     {url === "#experience" && <div className="active_nav" />}
                     <span> Experience</span>
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#packages">
                     {url === "#packages" && <div className="active_nav" />}
                     <span> Packages</span>
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#contact">
                     {url === "#contact" && <div className="active_nav" />}
                     <span> Contact</span>
                  </a>
               </li>
            </ul>

            <button className="bg-yellow-400 h-50 p-3 text-white font-bold border-none rounded-md  2xl:col-span-1  xl:col-span-1 col-span-5">
               Register Now
            </button>

            <div className="flex items-center col-span-1">
               <button className=" hover:bg-yellow-400 mx-2  p-2 rounded-md text-royal-blue">
                  EN
               </button>
               <div className="py-3 border-r-2 border-deep-blue" />
               <span className="hover:bg-yellow-400 mx-2  p-2 rounded-md text-royal-blue">
                  中
               </span>
            </div>
            <div
               className="2xl:hidden  xl:hidden col-span-1 cursor-pointer"
               onClick={() => setDorpdown((prevDropDown) => !prevDropDown)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
               >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
               </svg>
            </div>
         </div>

         <div className="w-full fixed  transform transition-all duration-150 ease-out">
            {dropdown && (
               <motion.ul
                  className={`bg-white p-4  container mx-auto flex-col items-center flex `}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <li className="nav_a">
                     <a className="" href="#home">
                        {/* <div className="activabsolute bg-yellow-400 h-7 w-7 left-0 rounded-full opacity-70 top-1/2 transform translate-y-1/2e_nav" /> */}
                        <span className="z-50">Home</span>
                     </a>
                  </li>
                  <li className="nav_a ">
                     <a className="" href="#about_us">
                        <span> About Us</span>
                     </a>
                  </li>
                  <li className="nav_a">
                     <a className="" href="#choose_us">
                        <span> Choose Us</span>
                     </a>
                  </li>
                  <li className="nav_a">
                     <a className="" href="#experience">
                        <span> Experience</span>
                     </a>
                  </li>
                  <li className="nav_a">
                     <a className="" href="#packages">
                        <span> Packages</span>
                     </a>
                  </li>
                  <li className="nav_a">
                     <a className="" href="#contact">
                        <span> Contact</span>
                     </a>
                  </li>
               </motion.ul>
            )}
         </div>
      </nav>
   );
};
