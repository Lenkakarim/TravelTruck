import React from "react";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, text = "Load more" }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default LoadMoreBtn;
