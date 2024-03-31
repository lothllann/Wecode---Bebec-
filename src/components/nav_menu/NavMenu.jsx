import React from "react";
import { menuItems } from "../helper/Menus";
import NavItem from "./NavItem";

const NavMenu = () => {

  return (
    <div className="menu-nav">
      {menuItems.map((item, i) => {
        return <NavItem key={i} title={item.name} childrens={item.childs}  />;
      })}
    </div>
  );
};

export default NavMenu;
