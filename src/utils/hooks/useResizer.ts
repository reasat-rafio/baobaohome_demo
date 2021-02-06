import { useState, useEffect } from "react";

export const useResize = (myRef: any) => {
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);

   useEffect(() => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
      const handleResize = () => {
         setWidth(myRef.current.offsetWidth);
         setHeight(myRef.current.offsetHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [myRef]);
   return { width, height };
};

export const useClientSize = (myRef: any) => {
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);
   useEffect(() => {
      setHeight(window.pageYOffset);
      const handleResize = () => {
         const width = myRef.current.getBoundingClientRect();
         setWidth(width.x);
         setHeight(window.pageYOffset);
      };
      window.addEventListener("scroll", handleResize);

      return () => {
         window.removeEventListener("scroll", handleResize);
      };
   }, [myRef]);
   return { width, height };
};
