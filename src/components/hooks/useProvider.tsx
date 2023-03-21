import React from "react";
import { AppProviderPropsBoards, AppProviderPropsColumns } from "../../constants/types";
import { pushData } from "../../services/database";
import { AppProviderContext } from "../contexts/Provider";

export default function useProvider() {
  const provider = React.useContext(AppProviderContext);

  async function addColumn(data: AppProviderPropsColumns) {
    provider.setDate((state) => ({ ...state, columns: { ...state.columns, data } }));
    await pushData("/columns", data, console.log);
  }
  async function addBoard(data: AppProviderPropsBoards) {
    provider.setDate((state) => ({ ...state, boards: { ...state.boards, data } }));
    await pushData("/columns", data, console.log);
  }
  function deleteColumn(id: string) {
    // provider.setDate((state) => ({ ...state, columns: state.columns.filter((x) => x.id !== id) }));
  }

  return { ...provider, addColumn, deleteColumn };
}
