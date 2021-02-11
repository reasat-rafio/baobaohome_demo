export default {
   name: "knowaboutus",
   title: "Know About Us",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Title",
         type: "string",
      },
      {
         name: "body",
         title: "Body",
         type: "blockContent",
      },
      {
         name: "mainImage",
         title: "Main image",
         type: "image",
         options: {
            hotspot: true,
         },
      },
   ],
   preview: {
      select: {
         title: "title",
         media: "mainImage",
      },
   },
};
