import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkEl =links.map((link)=>{
    const hyLink ='#' + link

    return <a key={link} href ={hyLink}>{link}</a>
  })
  return <nav>{linkEl}</nav>;
}

export default NavBar;
