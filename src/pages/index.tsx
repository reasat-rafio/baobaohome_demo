import Head from "next/head";
import { AboutUs } from "../components/AboutUs/AboutUs";
import HomePage from "../components/HomePage/HomePage";
import axios from "axios";
import { ChooseUs } from "../components/chooseUs/ChooseUs";
import { Experience } from "../components/Experience/Experience";
import { Packages } from "../components/Packages/Packages";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Footer } from "../components/Footer/Footer";
import { GetStaticProps } from "next";

export default function Home({ articles, chooseUs, experience, packages }) {
   console.log(experience);

   return (
      <div>
         <Head>
            <title>Bao Bao Home Demo</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="">
            <HomePage />
            <AboutUs articles={articles} />
            <ChooseUs chooseUs={chooseUs} />
            <Experience experience={experience} />
            <Packages packages={packages} />
            <ContactForm />
            <Footer />
         </main>
      </div>
   );
}

export const getStaticProps: GetStaticProps = async (context) => {
   const articleQuery = encodeURIComponent(`*[_type == 'knowaboutus']|order( _createdAt asc)  {
      body, 
      mainImage
    }`);
   const articles = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${articleQuery}`
   );

   // choose Us
   const chooseUsQuery = encodeURIComponent(`*[_type == 'chooseus']|order( _createdAt asc){
      title,
      description
    }`);
   const chooseUs = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${chooseUsQuery}`
   );

   // Experience
   const experienceQuery = encodeURIComponent(`*[_type == 'exprience'] {
      body,
      list
   }`);
   const experience = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${experienceQuery}`
   );

   // packages
   const packagesQuery = encodeURIComponent(`*[_type == "package"] {
      once_a_week_term_of_4_weeks,
      once_a_week_term_of_12_weeks,
      twice_a_week_term_of_4_weeks,
      twice_a_week_term_of_12_weeks,
   }`);
   const packages = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${packagesQuery}`
   );

   return {
      props: {
         articles: articles.data.result,
         chooseUs: chooseUs.data.result,
         experience: experience.data.result,
         packages: packages.data.result,
      },
   };
};
