import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
// import notFoundImg from "../assets/404.png";

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      {/* <img
        src={notFoundImg}
        alt="404: Страница не найдена — дом на колёсах в кемпинге"
        className={styles.image}
      /> */}

      <h1 className={styles.title}>Oops! Page not found</h1>
      <p className={styles.text}>
        Looks like you've come to the wrong way 🚐
      </p>

      <Link to="/" className={styles.button}>
        Go to Home
      </Link>
    </main>
  );
}
