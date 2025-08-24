import React from "react";
import { Field, Form, Formik } from "formik";
import css from "./FilterBar.module.css";
import Icon from "../Icon/Icon";
import { useAppDispatch } from "../../redux/hooks";
import {
  setParams,
  setCurrentPage,
} from "../../redux/campers/slice";

const FilterBar = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    location: "",
    equipment: [],
    form: "",
  };

  const handleSubmit = (values) => {
    const params = new URLSearchParams();

    if (values.equipment.length) {
      values.equipment.forEach((item) => {
        if (item === "automatic") {
          params.append("transmission", item);
        } else {
          params.append(item, "true");
        }
      });
    }

    if (values.form) {
      params.append("form", values.form);
    }

    if (values.location) {
      params.append(
        "location",
        values.location.split(", ")[0]
      );
    }

    const queryString = params.toString();
    dispatch(setParams(queryString));
    dispatch(setCurrentPage(1));
  };

  const handleReset = () => {
    dispatch(setParams(""));
    dispatch(setCurrentPage(1));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm }) => (
        <Form>
          <aside className={css.sidebar}>
            <label className={css.label}>
              Location
              <Icon
                className={css.icon}
                id="icon-Map"
                w={20}
                h={20}
              />
              <Field
                className={css.input}
                type="text"
                name="location"
                placeholder="City"
                autoComplete="off"
              />
            </label>

            <div className={css.equipWrap}>
              <h2 className={css.title}>Filters</h2>
              <h3 className={css.subtitle}>
                Vehicle equipment
              </h3>
              <div className={css.checkboxWrap}>
                {[
                  { name: "AC", icon: "icon-wind" },
                  {
                    name: "automatic",
                    icon: "icon-automatic",
                  },
                  { name: "kitchen", icon: "icon-cup-hot" },
                  { name: "TV", icon: "icon-TV" },
                  { name: "bathroom", icon: "icon-shower" },
                ].map((option) => (
                  <label
                    key={option.name}
                    className={
                      values.equipment.includes(option.name)
                        ? `${css.checkboxLabel} ${css.active}`
                        : css.checkboxLabel
                    }
                  >
                    <Field
                      className="visually-hidden"
                      type="checkbox"
                      name="equipment"
                      value={option.name}
                    />
                    <Icon
                      className={css.optionIcon}
                      id={option.icon}
                      w={32}
                      h={32}
                    />
                    {option.name === "automatic"
                      ? "Automatic"
                      : option.name
                          .charAt(0)
                          .toUpperCase() +
                        option.name.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <div className={css.typeWrap}>
              <h3 className={css.subtitle}>Vehicle type</h3>
              <div className={css.radioWrap}>
                {[
                  {
                    name: "panelTruck",
                    label: "Van",
                    icon: "icon-bi_grid-1x2",
                  },
                  {
                    name: "fullyIntegrated",
                    label: "Fully Integrated",
                    icon: "icon-bi_grid",
                  },
                  {
                    name: "alcove",
                    label: "Alcove",
                    icon: "icon-bi_grid-3x3",
                  },
                ].map((type) => (
                  <label
                    key={type.name}
                    className={
                      values.form === type.name
                        ? `${css.checkboxLabel} ${css.active}`
                        : css.checkboxLabel
                    }
                  >
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="form"
                      value={type.name}
                    />
                    <Icon
                      className={css.optionIcon}
                      id={type.icon}
                      w={32}
                      h={32}
                    />
                    {type.label}
                  </label>
                ))}
              </div>
            </div>

            <div className={css.btnWrapper}>
              <button
                className={`${css.btn} ${css.btnSubmit}`}
                type="submit"
              >
                Search
              </button>
              <button
                className={`${css.btn} ${css.btnReset}`}
                type="button"
                onClick={() => {
                  resetForm();
                  handleReset();
                  document.activeElement.blur();
                }}
              >
                Reset
              </button>
            </div>
          </aside>
        </Form>
      )}
    </Formik>
  );
};

export default FilterBar;
