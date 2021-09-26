import React from "react";

import Active from "../Filters/Acitve";
import All from "../Filters/All";
import Completed from "../Filters/Completed";
import Clearcompleted from "../Filters/Clearcompleted";
import Count from "../Count/Count";
import Contacto from "../contacto/Contacto";

export default function Footer() {
  return (
    <div className="footer">
      {/* // mobile */}
      <div className="footer_menu mobile">
        <Count />
        <Clearcompleted />
      </div>
      <div className="footer_menu footer_inf mobile">
        <All />
        <Active />
        <Completed />
      </div>
      <div className=" mobile">
        <Contacto/>
      </div>
      {/* // desktop */}
      <div className="footer_menu desktop">
        <Count />
        <All />
        <Active />
        <Completed />
        <Clearcompleted />
      </div>
      <div className=" desktop">
      <Contacto/>
      </div>
    </div>
  );
}
