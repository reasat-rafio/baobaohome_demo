import BlockContent from "@sanity/block-content-to-react";
import { client, urlFor } from "../../utils/sanity";
interface AboutUsProps {
   articles: any;
}

export const AboutUs: React.FC<AboutUsProps> = ({ articles }) => {
   const firstArticle = articles[0];
   const secondArticle = articles[1];

   return (
      <section className="transition-all duration-300 my-28" id="about_us">
         {/* Header section */}
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               About Us
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Start Early !
            </h2>
         </div>
         {/* Articales */}
         <div className="container mx-auto ">
            {/* First article */}
            <div className="grid  xl:grid-cols-2 lg:grid-cols-2 gap-3  md:grid-cols-1 sm:grid-cols-1 ">
               <div className=" xl:my-auto lg:my-auto xl:mr-36 lg:mr-24 text-text-color md:my-7 sm:my-7">
                  {firstArticle.body && (
                     <BlockContent blocks={firstArticle.body} />
                  )}
               </div>
               <div className="aboutUsImg">
                  {firstArticle && (
                     <img
                        className="rounded-md m-auto absulate"
                        src={urlFor(firstArticle.mainImage)
                           .height(500)
                           .fit("max")
                           .url()}
                        alt="Img"
                     />
                  )}
               </div>
            </div>
            {/* Second article */}
            <div className="grid  xl:grid-cols-2 lg:grid-cols-2 gap-3  md:grid-cols-1 sm:grid-cols-1 mt-12">
               <div className="aboutUsImg">
                  {secondArticle && (
                     <img
                        className="rounded-md absulate m-auto"
                        src={urlFor(secondArticle.mainImage)
                           .height(500)
                           .fit("max")
                           .url()}
                        alt="Img"
                     />
                  )}
               </div>
               <div className=" xl:my-auto lg:my-auto xl:ml-36 lg:ml-24 text-text-color md:my-7 sm:my-7  ">
                  {firstArticle.body && (
                     <BlockContent blocks={firstArticle.body} />
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};
