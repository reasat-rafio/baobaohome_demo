export default {
   name: "chooseus",
   title: "Choose Us",
   type: "document",
   fields: [
      {
         name: "mainImage",
         title: "Main image",
         type: "image",
         options: {
            hotspot: true,
         },
      },
      {
         name: "description",
         title: "Description",
         type: "text",
      },
   ],
};
