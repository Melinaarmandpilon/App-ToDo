import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

export default function Contacto() {
  return (
    <div className="footer_menu footer_inf">
      <div>
        <a href="https://www.linkedin.com/in/melinaarmandpilon/">
          <IoLogoLinkedin style={{ width: "25px", height: "25px" }} />
        </a>
      </div>
      <div >
        <a href="https://github.com/Melinaarmandpilon">
          <FiGithub style={{ width: "25px", height: "25px" }} />
        </a>
      </div>
    </div>
  );
}
