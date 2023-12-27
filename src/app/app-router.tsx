import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "~/shared/router/router";

export const AppRouter: FC = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
