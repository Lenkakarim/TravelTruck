import React from "react";
import { NavLink } from "react-router-dom";
import css from "./CamperInfoTabs.module.css";

const CamperInfoTabs = () => {
  return (
    <ul className={css.linkList}>
      <li>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive
              ? `${css.link} ${css.activeLink}`
              : css.link
          }
        >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? `${css.link} ${css.activeLink}`
              : css.link
          }
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default CamperInfoTabs;
