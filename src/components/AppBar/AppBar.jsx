// import { Link, NavLink } from "react-router-dom";
// import Icon from "../../assets/symbol-defs.svg";
// import css from "./AppBar.module.css";

// const AppBar = () => {
//   return (
//     <header className={css.wrapper}>
//       <nav className={css.nav}>
//         <Link className={css.logoLink} to="/">
//           <Icon id="icon-logo" w={136} h={17} />
//         </Link>

//         <ul className={css.linkList}>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? css.activeLink : css.link
//               }
//               to="/"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? css.activeLink : css.link
//               }
//               to="/catalog"
//             >
//               Catalog
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default AppBar;
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icon/icon.svg";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.wrapper}>
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
