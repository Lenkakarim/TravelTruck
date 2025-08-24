import Icon from "../Icon/Icon";
import css from "./VehicleListIcons.module.css";

const VehicleListIcons = ({ camper }) => {
  return (
    <ul className={css.iconsList}>
      {camper?.engine && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-fuel-pump"
            w={20}
            h={20}
          />
          {camper.engine}
        </li>
      )}
      {camper?.transmission && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-automatic"
            w={20}
            h={20}
          />
          {camper.transmission}
        </li>
      )}
      {camper?.AC && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-wind"
            w={20}
            h={20}
          />
          AC
        </li>
      )}
      {camper?.bathroom && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-shower"
            w={20}
            h={20}
          />
          Bathroom
        </li>
      )}
      {camper?.kitchen && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-cup-hot"
            w={20}
            h={20}
          />
          Kitchen
        </li>
      )}
      {camper?.TV && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-TV"
            w={20}
            h={20}
          />
          TV
        </li>
      )}
      {camper?.radio && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-radio"
            w={20}
            h={20}
          />
          Radio
        </li>
      )}
      {camper?.refrigerator && (
        <li className={css.iconsItem}>
          <Icon
            className={css.icons}
            id="icon-fridge"
            w={20}
            h={20}
          />
          Refrigerator
        </li>
      )}
      {camper?.microwave && (
        <li className={css.iconsItem}>
          <Icon
            className={`${css.icons} ${css.icon}`}
            id="icon-microwave"
            w={20}
            h={20}
          />
          Microwave
        </li>
      )}
      {camper?.gas && (
        <li className={css.iconsItem}>
          <Icon
            className={`${css.icons} ${css.icon}`}
            id="icon-gas-stove"
            w={20}
            h={20}
          />
          Gas
        </li>
      )}
      {camper?.water && (
        <li className={css.iconsItem}>
          <Icon
            className={`${css.icons} ${css.icon}`}
            id="icon-water"
            w={20}
            h={20}
          />
          Water
        </li>
      )}
    </ul>
  );
};

export default VehicleListIcons;
