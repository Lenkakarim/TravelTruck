import FilterBar from "../../components/FilterBar/FilterBar";
const CatalogPage = () => {
  //   const dispatch = useAppDispatch();

  //   const campers = useAppSelector(selectCampers);
  //   const currentPage = useAppSelector(selectCurrentPage);
  //   const totalItems = useAppSelector(selectTotalItems);
  //   const params = useAppSelector(selectParams);
  //   const isLoading = useAppSelector(selectIsLoading);
  //   const isError = useAppSelector(selectIsError);

  //   const limit = 4;
  //   const totalPages = Math.ceil(totalItems / limit);

  //   useEffect(() => {
  //     dispatch(
  //       fetchAllCampers({ page: currentPage, params })
  //     );

  //     const handleScroll = () => {
  //       dispatch(setScrollPosition(window.scrollY));
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [dispatch, currentPage, params]);

  //   const handlePageChange = (page: number): void => {
  //     dispatch(setCurrentPage(page));
  //   };

  return <FilterBar />;
};
export default CatalogPage;
