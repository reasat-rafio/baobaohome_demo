interface PackagesProps {
   packages: any;
}

export const Packages: React.FC<PackagesProps> = ({ packages }) => {
   const {
      once_a_week_term_of_4_weeks,
      once_a_week_term_of_12_weeks,
      twice_a_week_term_of_4_weeks,
      twice_a_week_term_of_12_weeks,
   } = packages[0];
   return (
      <section className="transition-all duration-300 py-28 bg-yellow-50 ">
         <div className="container mx-auto flex flex-col justify-items-center items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               Packages
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Bao Bao Home Tutor Packages
            </h2>
         </div>
         <div className="flex flex-col md:flex-row md:space-x-32 mt-24 items-center container mx-auto ">
            <div className="md:w-1/4 ">
               <h4 className="text-blue-900 font-semibold text-xl ">
                  Trial class $60 (one time only)
               </h4>

               <div className="mt-8 text-blue-400 text-sm block-content font-semibold">
                  <p>Some housekeeping rules:</p>
                  <br />
                  <ul>
                     <li style={{ listStyle: "" }}>
                        Please fill up the health declaration form before every
                        lesson.
                     </li>

                     <li>
                        Your babies’ scheduled lessons are important to us, they
                        are reserved specially for them. Therefore, we kindly
                        request at least a 48 hour notice for cancellations or
                        rescheduling of lessons.
                     </li>
                  </ul>
               </div>
            </div>
            <table className="md:w-1/2 mt-8 md:mt-0 rounded-lg overflow-hidden shadow-packages">
               <tbody>
                  <tr>
                     <td
                        className="p-4 border border-gray-200 text-white text-lg"
                        style={{ background: "#0fc2cf" }}
                     >
                        Lesson
                     </td>
                     <td
                        className="p-4 border border-gray-200 text-white text-lg"
                        style={{ background: "#fac100" }}
                     >
                        Term 4 weeks
                     </td>
                     <td
                        className="p-4 border border-gray-200 text-white text-lg"
                        style={{ background: "#f26b2a" }}
                     >
                        Term of 12 weeks
                     </td>
                  </tr>
                  <tr>
                     <td
                        className="tableStyle"
                        style={{ background: "#ffffff" }}
                     >
                        Lesson (once a week)
                     </td>
                     <td
                        className="tableStyle"
                        style={{ background: "#fef3cc" }}
                     >
                        {once_a_week_term_of_4_weeks}
                     </td>
                     <td
                        className="tableStyle"
                        style={{ background: "#fce1d4" }}
                     >
                        {once_a_week_term_of_12_weeks}
                     </td>
                  </tr>
                  <tr>
                     <td
                        className="tableStyle"
                        style={{ background: "#ffffff" }}
                     >
                        Lesson (twice a week)
                     </td>
                     <td
                        className="tableStyle"
                        style={{ background: "#fef3cc" }}
                     >
                        {twice_a_week_term_of_4_weeks}
                     </td>
                     <td
                        className="tableStyle"
                        style={{ background: "#fce1d4" }}
                     >
                        {twice_a_week_term_of_12_weeks}
                     </td>
                  </tr>
                  <tr>
                     <td className="bg-white p-4 text-gray-400" colSpan={3}>
                        <div className="block-content">
                           <p>Terms and Conditions</p>
                           <br />
                           <p>
                              Validity of 6 months. Non-refundable or
                              transferable. Any consideration for exception will
                              be on a case by case basis.
                           </p>
                           <br />
                           <p>
                              * Surcharge of $20 per lesson is applicable for
                              students in Sentosa.
                           </p>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>
   );
};
