import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//import muna to for linking pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CSS Files
import "./css/intro-top.css";
import "./css/navigations.css";
import "./css/aboutme.css";
import "./css/projects.css";
import "./css/hackathons.css";
import "./css/index.css";
import "./css/hobbies-mainpage.css";
import "./css/joinedevents.css";
import "./css/aboutmemainpage.css";
import "./css/contactme.css";

//js files
import JoinedEvents from "./pages/JoinedEvents";
import MainProjects from "./MainProjects";
import MyResume from "./pages/MyResume";
import HobbiesMainPage from "./pages/Hobbies-MainPage";
import AboutMeMain from "./pages/AboutMeMain";
import Contact from "./pages/Contact";
import AboutMeMainPage from "./AboutMeMainPage";

//projects for linkings
import Project1 from "./js-projects/Project1";
import Project2 from "./js-projects/Project2";
import Project4 from "./js-projects/Project4";
import Project3 from "./js-projects/Project3";
import Project5 from "./js-projects/Project5";
import Project6 from "./js-projects/Project6";

//then this is for linking pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "joinedevents",
    element: <JoinedEvents />,
  },
  {
    path: "mainprojects",
    element: <MainProjects />,
  },
  {
    path: "myresume",
    element: <MyResume />,
  },
  {
    path: "hobbies",
    element: <HobbiesMainPage />,
  },
  {
    path: "aboutme",
    element: <AboutMeMain />,
  },
  {
    path: "aboutmemainpage",
    element: <AboutMeMainPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "favproject",
    element: <Project1 />,
  },
  {
    path: "project1",
    element: <Project1 />,
  },

  {
    path: "project2",
    element: <Project2 />,
  },
  {
    path: "project3",
    element: <Project3 />,
  },
  {
    path: "project4",
    element: <Project4 />,
  },
  {
    path: "project5",
    element: <Project5 />,
  },
  {
    path: "project6",
    element: <Project6 />,
  },

  //routes for the Main Projects page
  {
    path: "project11",
    element: <Project1 />,
  },
  {
    path: "project22",
    element: <Project2 />,
  },
  {
    path: "project33",
    element: <Project3 />,
  },
  {
    path: "project44",
    element: <Project4 />,
  },
  {
    path: "project55",
    element: <Project5 />,
  },
  {
    path: "project66",
    element: <Project6 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
