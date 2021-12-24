import React from "react";

const Footer = () =>{
    const year = new Date().getFullYear();
  return <>
   <footer>
       <p>copyright © {year} | Made with ☕ by Anushka Garg</p>
   </footer>
  </>
};

export default Footer;