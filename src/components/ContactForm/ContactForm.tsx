interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
   return (
      <section
         className="transition-all duration-300 py-28 bg-blue-100 relative"
         id="contact"
      >
         <div className="absolute bottom-0">
            <img src="image/flower.png" alt="flower" />
         </div>
         <div className="absolute bottom-0 right-0">
            <object
               type="image/svg+xml"
               data="/Astronaut-01.svg"
               style={{ height: "400px", width: "200px" }}
            >
               svg-animation
            </object>
         </div>
         <div className="container mx-auto flex flex-col justify-items-center my-11">
            <h1 className="text-lg text-yellow-600 font-semibold my-8  mt-10 mb-3">
               Contact Form
            </h1>
            <h2 className="text-royal-blue font-bold text-5xl mb-10 mt-3 font-title">
               Find Out More
            </h2>
         </div>
         <div className="container mx-auto">
            <form className="grid grid-cols-2 gap-6 max-w-4xl">
               <input
                  className="p-4 rounded-md bg-white disabled:bg-blue-100"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
               />
               <input
                  className="p-4 rounded-md bg-white disabled:bg-blue-100"
                  type="email"
                  name="name"
                  placeholder="Your Email"
                  required
               />
               <textarea
                  className="row-start-2 col-span-2 p-4 rounded-md h-48 bg-white disabled:bg-blue-100"
                  placeholder="Your Message"
                  name="message"
                  required
               ></textarea>
               <button
                  className="p-4 rounded-md text-white font-bold"
                  type="submit"
                  style={{ background: "#0fc2cf" }}
               >
                  Send Message
               </button>
            </form>
         </div>
      </section>
   );
};
