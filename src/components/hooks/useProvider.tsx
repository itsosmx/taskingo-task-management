import React from "react";
import { AppProviderPropsBoards, AppProviderPropsBoardTasks, AppProviderPropsColumns } from "../../constants/types";
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
    await pushData("/boards", data, console.log);
  }
  async function addTask(id: string, data: AppProviderPropsBoardTasks) {
    // provider.setDate((state) => ({
    //   ...state,
    //   //@ts-ignore
    //   boards: {
    //     ...state.boards,
    //     [id]: {
    //       ...state.boards[id],
    //       tasks: {
    //         ...state.boards[id].tasks,
    //         data,
    //       },
    //     },
    //   },
    // }));
    await pushData(`/boards/${id}/tasks`, data, console.log);
  }

  return { ...provider, addColumn, addBoard, addTask };
}
