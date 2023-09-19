import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Body from "../src/components/Body";
// import About from "./components/About";
import Contact from "../src/components/Contact";
import Error from "../src/components/Error";
import RestaurantMenu from "../src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "../src/components/Shimmer";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
import {Provider} from "react-redux";

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On demand Loading
//Dynamic Import
//App Chunking

const Grocery = lazy(() => import("../src/components/Grocery"));

const About = lazy(() => import("../src/components/About"));

const AppLayout = () => {
  //authentication

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Ruquia Alam",
    };
    setUserName(data.name);
  }, []);

  return (
      <Provider store={appStore}>
   <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </UserContext.Provider>
     </Provider>
 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
