import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import Zone from "./pages/Zone";
import Graph from "./pages/Graph";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/zone1" element={<Zone />} />
        <Route path="/graph" element={<Graph />} />
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}
