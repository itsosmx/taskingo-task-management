import { RoutesProps } from "../constants/types";
import Authentication from "./authentication";
import Home from "./home";

export const routes: RoutesProps[] = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Authentication",
    component: Authentication,
    path: "/auth",
  },
];
