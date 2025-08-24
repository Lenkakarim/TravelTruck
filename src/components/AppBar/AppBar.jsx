import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import icon from "../../assets/icon/icon.svg";
import css from "./AppBar.module.css";

const AppBar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY < lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () =>
      window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`${css.wrapper} ${
        !showHeader ? css.hidden : ""
      }`}
    >
      <nav className={css.nav}>
        <Link to="/" className={css.logo}>
          <svg width="136" height="17">
            <use href={`${icon}#icon-logo`} />
          </svg>
        </Link>

        <ul className={css.linkList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
