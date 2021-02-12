import BlockContent from "@sanity/block-content-to-react";
interface ExperienceProps {
   experience: any;
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
   return (
      <section className="transition-all duration-300 py-28 bg-gray-50">
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               Experience
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Bao Bao Home Tutor Experience
            </h2>
         </div>
         <div className="container mx-auto grid pb-14  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
            {experience &&
               experience.map(({ body, list }) => (
                  <>
                     <div>
                        {body && (
                           <div className="text-text-color">
                              <BlockContent blocks={body} />
                           </div>
                        )}
                        <ul className="flex justify-items-center  flex-col my-10">
                           {list.map((l: string, i: number) => (
                              <li
                                 key={i}
                                 className="flex justify-items-center items-center  m-5 p-4 shadow-md bg-white"
                              >
                                 <p className="mx-2.5">
                                    <span className="bg-blue-300 rounded-full text-white font-bold px-2 mx-4">
                                       {i + 1}
                                    </span>
                                 </p>
                                 <p className="flex-1 font-bold text-blue-900 text-lg">
                                    {l}
                                 </p>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className="my-auto">
                        <video
                           poster="https://cdn.sanity.io/images/kohooh2x/production/6008c5a814ffaba4e22c00d3ec2e56196dae03a7-1920x1080.jpg"
                           width="1280"
                           height="720"
                           controls
                        >
                           <source
                              src="https://cdn.sanity.io/files/kohooh2x/production/1d337c22c8f9c7a4141baafae92c40b303c5f53c.mp4"
                              type="video/mp4"
                           />
                        </video>
                     </div>
                  </>
               ))}
         </div>
      </section>
   );
};
