import React from "react";

interface ChooseUsProps {}

export const ChooseUs: React.FC<ChooseUsProps> = ({}) => {
   return (
      <section className="choose-us transition-all duration-300 my-28">
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               Choose Us
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3">
               Why Choose Us
            </h2>
         </div>
      </section>
   );
};
