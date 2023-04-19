import React from "react";
import { Link } from "gatsby";

interface NavProps {
  toggleMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleMenu }) => {
  return (
    <>
      <Link to="/#a01" onClick={toggleMenu}>
        About
      </Link>
      <Link to="/#a02" onClick={toggleMenu}>
        Skills
      </Link>
      <Link to="/#a03" onClick={toggleMenu}>
        Blog
      </Link>
      <Link to="/#a04" onClick={toggleMenu}>
        Contact
      </Link>
    </>
  );
};

export default Nav;