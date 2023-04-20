import React from "react";
import { AppProviderPropsBoards, AppProviderPropsBoardTasks, AppProviderPropsColumns } from "../../constants/types";
import { pushData, updateData } from "../../services/database";
import { AppProviderContext } from "../contexts/Provider";

export default function useProvider() {
  const provider = React.useContext(AppProviderContext);

  async function addColumn(data: AppProviderPropsColumns) {
    provider.setDate((state) => ({ ...state, columns: { ...state.columns, data } }));
    await pushData("/columns", data, console.log);
  }
  async function addBoard(data: AppProviderPropsBoards) {
    await pushData("/boards", data, console.log);
  }
  async function addTask(id: string, data: AppProviderPropsBoardTasks) {
    await pushData(`/boards/${id}/tasks`, data, console.log);
  }
  async function updateTask(boardId: string, taskId: string, data: string) {
    await updateData(`/boards/${boardId}/tasks/${taskId}`, data);
  }

  return { ...provider, addColumn, addBoard, addTask, updateTask };
}
