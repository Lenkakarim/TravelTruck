// import { Field, Form, Formik } from "formik";
// import css from "./FilterBar.module.css";
// import Icon from "../../assets/icon/icon.svg";

// const FilterBar = () => {
//   const initialValues = {
//     location: "",
//     vehicleType: "",
//     equipment: [],
//   };

//   const equipmentOptions = [
//     "AC",
//     "Automatic",
//     "Kitchen",
//     "TV",
//     "Bathroom",
//   ];
//   const vehicleTypes = [
//     "Van",
//     "Fully Integrated",
//     "Alcove",
//   ];

//   return (
//     <Formik initialValues={initialValues}>
//       <Form>
//         <aside className={css.sidebar}>
//           <label className={css.label}>
//             Location
//             <Icon
//               className={css.icon}
//               id="icon-Map"
//               w={20}
//               h={20}
//             />
//             <Field
//               className={css.input}
//               name="location"
//               placeholder="City"
//             />
//           </label>

//           <h2 className={css.title}>Filters</h2>
//           <h3 className={css.subtitle}>
//             Vehicle equipment
//           </h3>

//           <div className={css.checkboxWrap}>
//             {equipmentOptions.map((option) => (
//               <label
//                 key={option}
//                 className={css.checkboxLabel}
//               >
//                 <Field
//                   type="checkbox"
//                   name="equipment"
//                   value={option}
//                   hidden
//                 />
//                 <Icon
//                   id={option.toLowerCase()}
//                   w={32}
//                   h={32}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>

//           <h3 className={css.subtitle}>Vehicle type</h3>

//           <div className={css.radioWrap}>
//             {vehicleTypes.map((type) => (
//               <label key={type} className={css.radioLabel}>
//                 <Field
//                   type="radio"
//                   name="vehicleType"
//                   value={type}
//                   hidden
//                 />
//                 <Icon
//                   id={type.toLowerCase()}
//                   w={32}
//                   h={32}
//                 />
//                 {type}
//               </label>
//             ))}
//           </div>

//           <button className={css.btn} type="submit">
//             Search
//           </button>
//         </aside>
//       </Form>
//     </Formik>
//   );
// };

// export default FilterBar;
import { Field, Form, Formik } from "formik";
import css from "./FilterBar.module.css";
import Icon from "../Icon/Icon"; // наш компонент

const FilterBar = ({ onFilter }) => {
  const initialValues = {
    location: "",
    vehicleType: "",
    equipment: [],
  };

  const equipmentOptions = [
    { name: "AC", icon: "icon-wind" },
    { name: "Automatic", icon: "icon-automatic" },
    { name: "Kitchen", icon: "icon-cup-hot" },
    { name: "TV", icon: "icon-TV" },
    { name: "Bathroom", icon: "icon-shower" },
  ];

  const vehicleTypes = [
    { name: "Van", icon: "icon-bi_grid-1x2" },
    { name: "Fully Integrated", icon: "icon-bi_grid" },
    { name: "Alcove", icon: "icon-bi_grid-3x3" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        if (onFilter) {
          onFilter(values);
        }
        console.log("Фильтры:", values);
      }}
    >
      <Form>
        <aside className={css.sidebar}>
          <label className={css.label}>
            Location
            <Icon
              id="icon-Map"
              size={20}
              className={css.icon}
            />
            <Field
              className={css.input}
              name="location"
              placeholder="City"
            />
          </label>

          <h2 className={css.title}>Filters</h2>
          <h3 className={css.subtitle}>
            Vehicle equipment
          </h3>

          <div className={css.checkboxWrap}>
            {equipmentOptions.map((option) => (
              <label
                key={option.name}
                className={css.checkboxLabel}
              >
                <Field
                  type="checkbox"
                  name="equipment"
                  value={option.name}
                  hidden
                />
                <Icon id={option.icon} size={32} />
                {option.name}
              </label>
            ))}
          </div>

          <h3 className={css.subtitle}>Vehicle type</h3>

          <div className={css.radioWrap}>
            {vehicleTypes.map((type) => (
              <label
                key={type.name}
                className={css.radioLabel}
              >
                <Field
                  type="radio"
                  name="vehicleType"
                  value={type.name}
                  hidden
                />
                <Icon id={type.icon} size={32} />
                {type.name}
              </label>
            ))}
          </div>

          <button className={css.btn} type="submit">
            Search
          </button>
        </aside>
      </Form>
    </Formik>
  );
};

export default FilterBar;
