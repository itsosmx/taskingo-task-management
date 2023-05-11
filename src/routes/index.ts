import { RoutesProps } from "../constants/types";
import Home from "./home";
import Agreement from "./agreement";
import Privacy from "./privacy";
import Board from "./board";

export const routes: RoutesProps[] = [
  {
    name: "Home",
    component: Home,
    path: "/*",
  },
  {
    name: "Agreement",
    component: Agreement,
    path: "/end-user-agreement",
  },
  {
    name: "Privacy",
    component: Privacy,
    path: "/privacy-policy",
  },
  {
    name: "Boards",
    component: Board,
    path: "/board/:id",
  },
];
