interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
   return (
      <nav className="m-auto transition-all z-30 my-10 ">
         <div className=" grid grid-cols-6 bg-white px-6 place-items-center transition-all duration-300 rounded-b-md  rounded-t-md py-7">
            <div className="col-span-1">
               <a href="">
                  <img
                     className="w-auto transition-all h-8"
                     src="/image/logo.png"
                     alt=""
                  />
               </a>
            </div>

            <ul className="list-none col-span-4 flex">
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     Home
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     About Us
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     Choose Us
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     Experience
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     Packages
                  </a>
               </li>
               <li className="nav_li">
                  <a className="nav_a" href="#">
                     Contact
                  </a>
               </li>
            </ul>
            <div className="col-span-1 flex">
               <button>Register Now</button>
               <div className="flex">
                  <button>EN</button>
                  <div className="py-3 border-r-2 border-deep-blue" />
                  <span>中</span>
               </div>
            </div>
         </div>
      </nav>
   );
};
