import React, { useState } from "react";
import { Link } from "gatsby";
import Nav from "./Nav";

function HeaderInner() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (  
      <div className="header-inner">
        <Link className="logo" to="/">
          Gatsby Base
        </Link>
        <nav className="nav">
          <div className="pcNav">
            <Link to="/#a01">
              About
            </Link>
            <Link to="/#a02">
              Skills
            </Link>
            <Link to="/#a03">
              Blog
            </Link>
            <Link to="/#a04">
              Contact
            </Link>
          </div>
          <button className="mobileNavIcon" onClick={toggleMenu}>
            <i className="material-icons">
              {menuOpen ? "close" : "menu"}
            </i>
          </button>
          <div className={`offCanvasMenu ${menuOpen ? "open" : ""}`}>
            <div className="mobileNav">
              <Nav toggleMenu={toggleMenu} />
            </div>
          </div>
        </nav>
      </div>
  );
}

export default HeaderInner;
