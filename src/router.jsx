import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { IndividualStudentInfo } from "./pages/IndividualStudentInfo";
import { CreateStudent } from "./pages/CreateStudent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/students/:id",
    element: <IndividualStudentInfo />,
  },
  {
    path: "/students/submit",
    element: <CreateStudent />,
  },
]);
