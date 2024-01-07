import { FaHome } from "react-icons/fa";
import { MAIN_ROUTE, STATISTICS_ROUTE } from "~/shared/router/paths";

export const tabsData = [
  {
    id: 1,
    icon: FaHome,
    title: "Счета",
    path: MAIN_ROUTE,
  },
  {
    id: 2,
    icon: FaHome,
    title: "Статистика",
    path: STATISTICS_ROUTE,
  },
  {
    id: 3,
    icon: FaHome,
    title: "Tab 3",
    path: MAIN_ROUTE,
  },
];
