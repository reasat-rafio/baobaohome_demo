interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
   return (
      <section className="footer transition-all duration-300 py-28 ">
         <div className="relative section pt-32 pb-56 grid md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
            <div>
               <h1 className="text-xl m-0 mb-4 text-left font-semibold text-royal-blue">
                  Toddler Language Assessment
               </h1>
               <ul>
                  <li className="my-2">
                     <a href="#">0-12 months </a>
                  </li>
                  <li className="my-2">
                     <a href="#">13-24 months </a>
                  </li>
                  <li className="my-2">
                     <a href="#">25-36 months </a>
                  </li>
               </ul>
            </div>
            <div className="w-44">
               <h1 className="text-xl m-0 mb-4 text-left font-semibold text-royal-blue">
                  Links
               </h1>
               <ul>
                  <li className="my-2">
                     <a href="#">Registration </a>
                  </li>
                  <li className="my-2">
                     <a href="#">Health Declaration Form </a>
                  </li>
               </ul>
            </div>
            <div className="w-44 text-blue-900">
               <h1 className="text-xl m-0 mb-4 text-left font-semibold text-royal-blue">
                  Contact Us
               </h1>
               <ul>
                  <li className="flex gap-4 items-center my-4">
                     <div>
                        <svg
                           style={{ width: "36px", height: "36px" }}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                           />
                        </svg>
                     </div>

                     <a href="#">Info@baobaohometutordemo.com</a>
                  </li>
                  <li className="flex gap-4 items-center my-4">
                     <div>
                        <svg
                           style={{ width: "36px", height: "36px" }}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                           />
                        </svg>
                     </div>

                     <a href="#">+12 3456 789</a>
                  </li>
                  <li className="flex gap-4 items-center my-4">
                     <div>
                        <svg
                           style={{ width: "36px", height: "36px" }}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                           />
                        </svg>
                     </div>

                     <a href="#">WhatsApp</a>
                  </li>
               </ul>
            </div>
            <div className="relative w-44 ">
               <h1 className="text-xl m-0 mb-4 text-left font-semibold text-royal-blue">
                  Follow Us
               </h1>
               <ul className="flex gap-2 ">
                  <li>FaceBook</li>
                  <li>Instagram</li>
               </ul>
            </div>
         </div>
      </section>
   );
};
