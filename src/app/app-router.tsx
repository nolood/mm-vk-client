import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "~/shared/router/router";
import { observer } from "mobx-react-lite";
import UserModule from "~/entities/user/model/user";

export const AppRouter: FC = observer(() => {
  const { isAuth } = UserModule;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
    </Routes>
  );
});
