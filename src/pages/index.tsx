import Head from "next/head";
import { AboutUs } from "../components/AboutUs/AboutUs";
import HomePage from "../components/HomePage/HomePage";
import axios from "axios";
import { ChooseUs } from "../components/chooseUs/ChooseUs";
import { Experience } from "../components/Experience/Experience";

export default function Home({ articles, chooseUs, experience }) {
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
         </main>
      </div>
   );
}

export const getStaticProps = async (context) => {
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
   const experienceQyery = encodeURIComponent(`*[_type == 'exprience'] {
      body,
      list
   }`);
   const experience = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${experienceQyery}`
   );

   return {
      props: {
         articles: articles.data.result,
         chooseUs: chooseUs.data.result,
         experience: experience.data.result,
      },
   };
};
