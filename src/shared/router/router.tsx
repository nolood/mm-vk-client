import { type RouteObject, createBrowserRouter } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE } from "./paths";
import { LoginPage, MainPage, RegisterPage } from "~/pages";
import { AppRouter } from "~/app/app-router";

export const publicRoutes: RouteObject[] = [
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <AppRouter />,
  },
];
export const authRoutes: RouteObject[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
];

export const router = createBrowserRouter(publicRoutes);
