import Head from "next/head";
import { AboutUs } from "../components/AboutUs/AboutUs";
import HomePage from "../components/HomePage/HomePage";
import axios from "axios";
import { ChooseUs } from "../components/chooseUs/ChooseUs";

export default function Home({ articles }) {
   return (
      <div>
         <Head>
            <title>Bao Bao Home Demo</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="">
            <HomePage />
            <AboutUs articles={articles} />
            <ChooseUs />
         </main>
      </div>
   );
}

export const getStaticProps = async (context) => {
   const query = encodeURIComponent(`*[_type == 'knowaboutus']|order( _createdAt asc)  {
      body, 
      mainImage
    }`);
   const result = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${query}`
   );

   return {
      props: {
         articles: result.data.result,
      },
   };
};
