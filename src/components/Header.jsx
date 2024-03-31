import React, { useState } from "react";
import { Menu, Logo, Search, Bag, User, Quit } from "./helper/Icons";

import NavMenu from "./nav_menu/NavMenu";



const Header = ({ productsNumber }) => {
  const [scroll, setScroll] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);

  function closeMenu(){
    setMenuIsActive(false)
  }

  window.addEventListener("scroll", handleScroll);

  function handleMenu() {
    setMenuIsActive(!menuIsActive);
  }


  function handleScroll() {
    if (document.documentElement.scrollTop > 50) {
      setScroll(true);
    } else setScroll(false);
  }

  return (
    <>
      <section className={`${!scroll ? "light" : "dark"} header`}>
        <div>
          <button onClick={() => handleMenu()}>
            <Menu />
          </button>
          <button>
            <Search />
          </button>
        </div>
        <a href="/">
          <Logo />
        </a>
        <div>
          <button>
            <User />
          </button>
          <button className="bag">
            <Bag />
            <span>{productsNumber}</span>
          </button>
        </div>
      </section>

      <div className={`${menuIsActive ? "show" : "hidden"} menu`}>
        <div className="menu-head">
          <Logo />
          <button onClick={() => closeMenu()}>
            <Quit />
          </button>
        </div>

        <div className="menu-banner">
          <img src="/static/images/banners/Banner-menu.png" alt="banner menu" />
          <div>
            <p>Celebration - 20 Anos</p>
            <a href="#">Conheça</a>
          </div>
        </div>

        <NavMenu />
      </div>
    </>
  );
};

export default Header;
