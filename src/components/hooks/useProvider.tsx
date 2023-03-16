import React from "react";
import { AppProviderPropsColumns } from "../../constants/types";
import { AppProviderContext } from "../contexts/Provider";

export default function useProvider() {
  const provider = React.useContext(AppProviderContext);

  function addColumn(data: AppProviderPropsColumns) {
    provider.setDate((state) => ({ ...state, columns: [...state.columns, data] }));
  }
  function deleteColumn(id: string) {
    provider.setDate((state) => ({ ...state, columns: state.columns.filter((x) => x.id !== id) }));
  }

  return { ...provider, addColumn, deleteColumn };
}
