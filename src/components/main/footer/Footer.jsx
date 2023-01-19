import React from "react";
import SocialMedias from "../socialMedias/SocialMedias";

const Footer = ({ leng_footer, leng_social }) => {
  return (
    <div className="container_footer">
      <h2>Ereño Raúl</h2>
      <div className="quote">
        <p>{leng_footer.quote}</p>
        <p className="film">{leng_footer.author}</p>
      </div>
      <SocialMedias links={leng_social} />

     
    </div>
  );
};

export default Footer;
