import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "~/shared/router/router";
import { observer } from "mobx-react-lite";
import { AppBarProvider } from "~/app/providers";
import { UserModule } from "~/entities";
import ErrorBoundary from "~/shared/ui/error-boundary";

export const AppRouter: FC = observer(() => {
  const { isAuth } = UserModule;
  return (
    <AppBarProvider>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route
              errorElement={<ErrorBoundary />}
              key={path}
              path={path}
              element={element}
            />
          ))}
      </Routes>
    </AppBarProvider>
  );
});
