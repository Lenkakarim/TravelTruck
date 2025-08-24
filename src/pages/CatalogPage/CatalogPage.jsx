import React, { useEffect } from "react";
import { toast } from "react-toastify";
import CampersList from "../../components/CampersList/CampersList";
import FilterBar from "../../components/FilterBar/FilterBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks";
import { fetchAllCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectCurrentPage,
  selectIsError,
  selectIsLoading,
  selectParams,
  selectTotalItems,
} from "../../redux/campers/selectors";
import {
  setCurrentPage,
  setParams,
} from "../../redux/campers/slice";
import { setScrollPosition } from "../../redux/scrollUp/slice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();

  const campers = useAppSelector(selectCampers);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalItems = useAppSelector(selectTotalItems);
  const params = useAppSelector(selectParams);
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  const limit = 4;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    dispatch(
      fetchAllCampers({ page: currentPage, params })
    );

    const handleScroll = () => {
      dispatch(setScrollPosition(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [dispatch, currentPage, params]);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong...");
    }
  }, [isError]);

  const handleFilter = (filters) => {
    dispatch(setParams(filters));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={css.catalog}>
      <h2 className="visually-hidden">Catalog</h2>
      <FilterBar onFilter={handleFilter} />

      {isLoading && <Loader />}

      {!isLoading && campers.length > 0 && (
        <div>
          <CampersList campers={campers} />

          {currentPage < totalPages ? (
            <LoadMoreBtn
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
            />
          ) : (
            <LoadMoreBtn
              onClick={handleBackToTop}
              text="Back to top"
            />
          )}
        </div>
      )}

      {!isLoading && campers.length === 0 && !isError && (
        <p>No campers found for the selected filters.</p>
      )}
    </section>
  );
};

export default CatalogPage;
