import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/page1"}>page1</Link> <br />
      <Link to={"/page2"}>page2</Link> <br />
      <Link to={"/page3"}>page3</Link> <br />
      <Link to={"/page4"}>page4</Link> <br />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  );
}
