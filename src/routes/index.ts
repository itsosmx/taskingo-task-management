import { RoutesProps } from "../constants/types";
import Home from "./home";

export const routes: RoutesProps[] = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
];
