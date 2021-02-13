import { urlFor } from "../../utils/sanity";
import moment from "moment";

interface NewsProps {
   news: any[];
}

export const News: React.FC<NewsProps> = ({ news }) => {
   return (
      <section className="transition-all duration-300 py-28 bg-blue-50 ">
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               News
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Featured On
            </h2>
         </div>
         <div className="container mx-auto grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 gap-5">
            {news &&
               news.map(
                  (
                     { description, mainImage, releaseDate, title, background },
                     i: number
                  ) => (
                     <div
                        key={i}
                        className="grid-cols-3 m-auto bg-white shadow-md relative rounded-md overflow-hidden"
                     >
                        <div>
                           <img
                              src={urlFor(mainImage)
                                 .height(250)
                                 .width(600)
                                 .fit("max")
                                 .url()}
                              alt=""
                           />
                           <div className=" transform ">
                              <div className="custom-shape-divider-bottom-1613167493">
                                 <svg
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                 >
                                    <path
                                       d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                       className="shape-fill"
                                    ></path>
                                 </svg>
                              </div>
                           </div>
                        </div>

                        <div className="p-6 ">
                           <div
                              className="absolute top-1/3 left-3  rounded-full"
                              style={{ background: `${background}` }}
                           >
                              <div className="px-5 py-3 text-sm  flex flex-col justify-items-center items-center ">
                                 <p> {moment(releaseDate).format(" Do")}</p>
                                 <p> {moment(releaseDate).format("MMM ")}</p>
                              </div>
                           </div>
                           <div className="my-4 text-royal-blue font-semibold text-lg">
                              {title}
                           </div>
                           <div className="py-3 text-text-color border-b-2 border-gray-100">
                              {description}
                           </div>
                           <ul className="py-4 text-text-color flex">
                              <li className="mr-5">Ryan Weber</li>
                              <li className="mr-5">0</li>
                              <li className="mr-5">0</li>
                           </ul>
                        </div>
                     </div>
                  )
               )}
         </div>
      </section>
   );
};
