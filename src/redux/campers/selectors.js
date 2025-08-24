export const selectCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) =>
  state.campers.camperDetails;
export const selectParams = (state) => state.campers.params;
export const selectIsLoading = (state) =>
  state.campers.loading;
export const selectIsError = (state) => state.campers.error;
export const selectCurrentPage = (state) =>
  state.campers.currentPage;
export const selectTotalItems = (state) =>
  state.campers.totalItems;
