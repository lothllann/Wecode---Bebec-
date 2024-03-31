import React, { useState } from "react";
import { Arrow } from "../helper/Icons";

const NavItem = ({ title, childrens }) => {
  const [open, setOpen] = useState(false)
  return childrens ? (
    <div className={`${open ? "open" : ""} nav-item`} >
      <div className="nav-btn" onClick={()=>setOpen(!open)}>
        <p>{title}</p>
        <div className={`${open ? "open" : ""} arrow`}>{childrens && <Arrow />}</div>
      </div>

      <div className={`${open ? "open" : ""} dropdown-content`}>
        {childrens.map((submenu, i) => (
          <a href="#" className="nav-subitem" key={i}>
            {submenu.name}
          </a>
        ))}
      </div>
    </div>
  ) : (
    <a className="nav-item" href="">
      {title}
    </a>
  );
};

export default NavItem;
