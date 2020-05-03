import React, { Suspense, lazy, useRef } from "react";

import "./scss/style.scss";

import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "./config";
import {
  BrowserRouter,
  HashRouter,
  useLocation,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";
import Confirmation from "./components/Pages/Confirmation";

const AppHeader = React.lazy(() => import("./components/AppHeader"));
const AppFooter = React.lazy(() => import("./components/AppFooter"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const Staging = React.lazy(() => import("./components/Pages/Staging"));
const Contact = React.lazy(() => import("./components/Pages/Contact"));
const Pricing = React.lazy(() => import("./components/Pages/Pricing"));
const privacyPolicy = React.lazy(() =>
  import("./components/Pages/Privacy-policy")
);
const confirmation = React.lazy(() =>
  import("./components/Pages/Confirmation")
);
const underConstruction = React.lazy(() =>
  import("./components/Pages/Under-construction")
);
const termsAndConditions = React.lazy(() =>
  import("./components/Pages/Terms-and-conditions")
);
const TempVideo = React.lazy(() => import("./components/Pages/Temp-video"));
const Schedule = React.lazy(() => import("./components/Pages/Schedule"));

const App = () => {
  const childRef = useRef();

  return (
    <React.Suspense
      path="/"
      fallback={
        <section className="">
          <div className="container full-width">
            <div className="flex flex-wrap items-center">
              <div className="hero__header">
                <div className="hero__text">
                  <strong></strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <ScrollToTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/confirmation`}>
              <AppHeader noAction />
              <Confirmation></Confirmation>
              <AppFooter noAction />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/tempvideo`}>
              <AppHeader noAction />
              <TempVideo></TempVideo>
              <AppFooter noAction />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/schedule`}>
              <AppHeader />
              <Schedule></Schedule>
              <AppFooter noAction />
            </Route>
            <Route
              exact
              path={[
                `${process.env.PUBLIC_URL}/`,
                `${process.env.PUBLIC_URL}/pricing`,
                `${process.env.PUBLIC_URL}/under-construction`,
                `${process.env.PUBLIC_URL}/privacy-policy`,
                `${process.env.PUBLIC_URL}/terms-and-conditions`,
                `${process.env.PUBLIC_URL}/contact`,
                `${process.env.PUBLIC_URL}/schedule`,
                `${process.env.PUBLIC_URL}/staging`,
              ]}
            >
              <AppHeader ref={childRef} />
              {/* main */}
              <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <Home
                  onSignUp={() => childRef.current.modalHandlerRegistration()}
                />
              </Route>
              <Route exact path={`${process.env.PUBLIC_URL}/staging`}>
                <Staging
                  onSignUp={() => childRef.current.modalHandlerRegistration()}
                />
              </Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/contact`}
                component={Contact}
              ></Route>
              <Route exact path={`${process.env.PUBLIC_URL}/pricing`}></Route>

              <Route
                path={`${process.env.PUBLIC_URL}/pricing`}
                render={(props) => (
                  <Pricing
                    onSignUp={() => childRef.current.modalHandlerRegistration()}
                    {...props}
                  />
                )}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/under-construction`}
                component={underConstruction}
              ></Route>
              <Route
                path={`${process.env.PUBLIC_URL}/privacy-policy`}
                component={privacyPolicy}
              ></Route>
              <Route
                path={`${process.env.PUBLIC_URL}/terms-and-conditions`}
                component={termsAndConditions}
              ></Route>

              <AppFooter
                onSignUp={() => childRef.current.modalHandlerRegistration()}
              />
              {/* main end */}
            </Route>
            <Route component={underConstruction} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
