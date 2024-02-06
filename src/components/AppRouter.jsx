import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import { globalRoutes } from "../router/routers";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {globalRoutes.map((route) => (
        <Route key={route.name} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
