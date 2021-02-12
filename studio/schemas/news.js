export default {
   name: "news",
   title: "News",
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
         name: "releaseDate",
         title: "Release Date",
         type: "date",
         options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
         },
         description: "Release Date of the book",
      },
      {
         name: "title",
         title: "Title",
         type: "text",
      },
      {
         name: "description",
         title: "Description",
         type: "text",
      },
      {
         name: "background",
         title: "Background",
         type: "text",
      },
   ],
   preview: {
      select: {
         title: "title",
         media: "mainImage",
      },
   },
};
