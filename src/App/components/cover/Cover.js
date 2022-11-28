import React from "react";
import "./Cover.css"
const video = "https://res.cloudinary.com/seuz716/video/upload/v1667853350/CoverVideo_e0qhsh.mp4"
const Cover = () => {
  return (
    <div className="cover-container"  >
      <video className="video" src= {video}   autoPlay loop muted/>
      <h1 >PORTAFOLIO</h1>
      <br/>
      <h3> <a className="links" href="/desarrollo"> Desarollador</a> |<a className="links" href="/desarrollo"> Diseñador </a> |  <a className="links" href="/desarrollo">Contador Público</a> |<a className="links" href="/desarrollo"> Creador de contenido </a></h3>
    </div>
  );
};

export default Cover;
