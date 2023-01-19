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

      <a className="arrowUpMobile" href="#container_landing">
        <svg
          width={"30"}
          height={"30"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
