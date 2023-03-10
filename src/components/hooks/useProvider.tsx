import React from "react";
import { AppProviderContext } from "../contexts/Provider";

export default function useProvider() {
  return React.useContext(AppProviderContext);
}
