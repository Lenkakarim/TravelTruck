import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
// import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";

const Layout = lazy(() =>
  import("./components/Layout/Layout")
);
const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage")
);
const CatalogPage = lazy(() =>
  import("./pages/CatalogPage/CatalogPage")
);
const DetailsPage = lazy(() =>
  import("./pages/DetailsPage/DetailsPage")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);
// const Features = lazy(() =>
//   import("./components/Features/Features")
// );
// const Reviews = lazy(() =>
//   import("./components/Reviews/Reviews")
// );

const App = () => {
  return (
    <div>
      <Container>
        {/* <BtnScrollUp /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="catalog"
                element={<CatalogPage />}
              />
              <Route
                path="catalog/:id"
                element={<DetailsPage />}
              >
                {/* <Route
                  path="features"
                  element={<Features />}
                />
                <Route
                  path="reviews"
                  element={<Reviews />}
                /> */}
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};
export default App;
