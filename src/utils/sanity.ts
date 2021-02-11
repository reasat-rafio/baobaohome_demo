import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

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
