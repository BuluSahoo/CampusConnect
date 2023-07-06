import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import redux component
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/redux/store";
import { persistStore } from "redux-persist";

import PageLoader from "./components/common/PageLoader";
import BaseLayout from "./components/Layout/BaseLayout";

// import page components
const PageNotFound = lazy(() => import("./pages/404"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const OtpVerify = lazy(() => import("./pages/OtpVerify"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const UserPage = lazy(() => import("./pages/UserPage"));

// redux persist
const persistor = persistStore(store);

function App() {
  const routes = [
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/signup",
      component: <Signup />,
    },
    {
      path: "/forgotpassword",
      component: <ForgotPassword />,
    },
    {
      path: "/otpverify",
      component: <OtpVerify />,
    },
    {
      path: "/resetpassword",
      component: <ResetPassword />,
    },
    // add authenticated page route
    {
      path: "/",
      component: <UserPage />,
    },
    // 404 not found page
    {
      path: "*",
      component: <PageNotFound />,
    },
  ];

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.authentication ? (
                      <BaseLayout page_title={route.page_title}>
                        {route.component}
                      </BaseLayout>
                    ) : (
                      route.component
                    )
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
