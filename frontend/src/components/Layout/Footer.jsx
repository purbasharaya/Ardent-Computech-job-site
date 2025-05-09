import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Purbasha</div>
      <div>
        <Link to={"https://www.instagram.com/purbashasays.hi/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://www.linkedin.com/in/purbasha-mandal/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/purbasharaya"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://m.facebook.com/"} target="_blank">
          <FaFacebookF />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
