import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import axios from "axios";

export const options = {
   dataset: "production", // Replace this with yours
   projectId: "ee2b58n4", // Change if not "production"
   useCdn: process.env.NODE_ENV === "production",
};

export const client = sanityClient(options);

export function urlFor(source) {
   const imageBuilder = imageUrlBuilder(client);
   return imageBuilder.image(source);
}

export const encodedURL = async (url: string) => {
   const query = encodeURIComponent(url);
   const res = await axios(
      `https://ee2b58n4.api.sanity.io/v1/data/query/production?query=${query}`
   );
   return res.data.result;
};
