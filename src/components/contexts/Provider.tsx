import React from "react";
import { AppProviderProps } from "../../constants/types";

interface AppProviderContextProps {
  data: AppProviderProps;
  setDate: React.Dispatch<React.SetStateAction<AppProviderProps>>;
}
export const AppProviderContext = React.createContext({} as AppProviderContextProps);

export default function Provider({ ...props }: React.PropsWithChildren) {
  const [data, setDate] = React.useState<AppProviderProps>({
    boards: [
      {
        name: "Platform Launch",
        slug: "pt-launch",
        tasks: [todo(), todo(), todo(), done],
      },
      {
        name: "Marketing Plans",
        slug: "m-plans",
        tasks: [todo(), done],
      },
      {
        name: "Road map",
        slug: "r-map",
        tasks: [done, done],
      },
    ],
    columns: [
      {
        title: "TODO",
        id: "default-todo",
      },
      {
        title: "DOING",
        id: "default-doing",
      },
      {
        title: "DONE",
        id: "default-done",
      },
    ],
  });
  const isMount = React.useRef(true);

  return <AppProviderContext.Provider value={{ data, setDate }}>{props.children}</AppProviderContext.Provider>;
}

const todo = () => {
  return {
    title: "Build UI for onBoard",
    status: "default-todo",
    description: "Build UI for onBoard asdas dasd asd",
    createAt: Date.now(),
    id: Math.random().toString(),
    subtasks: [
      {
        content: "sad",
        status: false,
        updateAt: Date.now(),
        id: Math.random().toString(),
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi fuga illo officia autem dolores vero quasi, dolorem alias quos rem illum culpa, laboriosam debitis cum laudantium sapiente eligendi similique!",
        status: true,
        updateAt: Date.now(),
        id: Math.random().toString(),
      },
    ],
  };
};
const done = {
  title: "Build UI for onBoard",
  status: "default-done",
  description: "Build UI for onBoard asdas dasd asd",
  createAt: Date.now(),
  id: Math.random().toString(),
};
