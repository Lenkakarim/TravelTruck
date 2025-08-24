import React, { useEffect, Suspense } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./DetailsPage.module.css";

import AboutCamper from "../../components/AboutCamper/AboutCamper";
import BookCamperForm from "../../components/BookCamperForm/BookCamperForm";
import Loader from "../../components/Loader/Loader";

import { fetchCamper } from "../../redux/campers/operations";
import {
  selectCamperDetails,
  selectIsError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import CamperInfoTabs from "../../components/CamperInfoTabs/CamperInfoTabs";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load camper details!");
    }
  }, [isError]);

  return (
    <section className={css.details}>
      <nav className={css.breadcrumbs}>
        <Link to="/catalog">Catalog</Link>
        <span> / {camper ? camper.name : "Details"}</span>
      </nav>

      <h2 className="visually-hidden">
        Details about the camper
      </h2>

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <AboutCamper camper={camper} />
          <CamperInfoTabs />
          <div className={css.wrapper}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookCamperForm />
          </div>
        </>
      )}
    </section>
  );
};

export default DetailsPage;
