import { lazy } from "react";

// export const MainPage = lazy(async () => await import("./main"));
export { default as MainPage } from "./main";
export const LoginPage = lazy(async () => await import("./login"));
export const RegisterPage = lazy(async () => await import("./register"));
export const GreeterPage = lazy(async () => await import("./greeter"));
export { default as StatisticsPage } from "./statistics";
export { default as BillPage } from "./bill";
