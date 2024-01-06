import { type RouteObject, createBrowserRouter } from "react-router-dom";
import {
  GREETER_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTER_ROUTE,
} from "./paths";
import { GreeterPage, LoginPage, MainPage, RegisterPage } from "~/pages";
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
    path: GREETER_ROUTE,
    element: <GreeterPage />,
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
