import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
