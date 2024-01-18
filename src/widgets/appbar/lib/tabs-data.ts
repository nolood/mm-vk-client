import { FaHome } from "react-icons/fa";
import { MAIN_ROUTE, STATISTICS_ROUTE } from "~/shared/router/paths";
import { IoIosStats } from "react-icons/io";
export const tabsData = [
  {
    id: 1,
    icon: FaHome,
    title: "Счета",
    path: MAIN_ROUTE,
  },
  {
    id: 2,
    icon: IoIosStats,
    title: "Статистика",
    path: STATISTICS_ROUTE,
  },
];
