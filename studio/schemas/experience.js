export default {
   name: "exprience",
   title: "Exprience",
   type: "document",
   fields: [
      {
         name: "body",
         title: "Body",
         type: "blockContent",
      },
      {
         name: "list",
         title: "List",
         type: "array",
         of: [{ type: "string" }],
      },
   ],
};
