import Image from "next/image";

interface ChooseUsProps {
   chooseUs: any[];
}

export const ChooseUs: React.FC<ChooseUsProps> = ({ chooseUs }) => {
   return (
      <section
         className="choose-us transition-all duration-300 py-20"
         id="choose_us"
      >
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3 ">
               Choose Us
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Why Choose Us
            </h2>
         </div>
         <ul className="container mx-auto grid pb-14  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {chooseUs &&
               chooseUs.map(({ title, description }, i: number) => (
                  <li key={i} className="flex justify-items-center ">
                     <img className="mb-auto mr-9" src={title} alt="logo" />
                     <p className="text-text-color">{description}</p>
                  </li>
               ))}
         </ul>
      </section>
   );
};
