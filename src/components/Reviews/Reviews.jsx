import React from "react";
import Icon from "../Icon/Icon";
import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campers/selectors";

const Reviews = () => {
  const camper = useSelector(selectCamperDetails);

  return (
    <ul className={css.reviewsList}>
      {camper?.reviews.map((review, i) => (
        <li key={i} className={css.reviewsItem}>
          <div className={css.wrapperTop}>
            <div className={css.avatar}>
              {review.reviewer_name[0]}
            </div>
            <div className={css.innerWrap}>
              <h2 className={css.name}>
                {review.reviewer_name}
              </h2>
              <div className={css.starWrap}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    className={
                      review.reviewer_rating >= star
                        ? css.yellow
                        : css.star
                    }
                    id="icon-star"
                    w={16}
                    h={16}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className={css.text}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
