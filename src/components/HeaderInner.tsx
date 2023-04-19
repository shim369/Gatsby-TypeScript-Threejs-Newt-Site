import React, { useState } from "react";
import { Link } from "gatsby";

const HeaderInner: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
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
          <button className="mobileNavIcon" onClick={handleToggleMenu}>
            <i className="material-icons">
              {menuOpen ? "close" : "menu"}
            </i>
          </button>
          <div className={`offCanvasMenu ${menuOpen ? "open" : ""}`}>
            <div className="mobileNav">
              <Link to="/#a01" onClick={handleToggleMenu}>
                About
              </Link>
              <Link to="/#a02" onClick={handleToggleMenu}>
                Skills
              </Link>
              <Link to="/#a03" onClick={handleToggleMenu}>
                Blog
              </Link>
              <Link to="/#a04" onClick={handleToggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default HeaderInner;