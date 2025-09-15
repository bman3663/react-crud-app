import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Layout, Home, About, Help, Table } from "./components";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Form from "./components/Form";
import Table from "./components/Table";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="table" element={<Table />} />
      <Route path="form" element={<Form />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
