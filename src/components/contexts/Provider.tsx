import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AppProviderProps } from "../../constants/types";
import { getCurrentUser } from "../../services/database";

interface AppProviderContextProps {
  data: AppProviderProps;
  setDate: React.Dispatch<React.SetStateAction<AppProviderProps>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export const AppProviderContext = React.createContext({} as AppProviderContextProps);

export default function Provider({ ...props }: React.PropsWithChildren) {
  const [data, setDate] = React.useState<AppProviderProps>(tst);
  const [user, setUser] = React.useState<User | null>(null);
  const navigate = useNavigate();
  const isMount = React.useRef(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (response) => {
      response ? setUser(response) : setUser(null);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;
    let _unsubscribe: Function;
    (async () => {
      const { unsubscribe, data } = await getCurrentUser(
        user?.uid,
        (snap: any) => {
          _unsubscribe = unsubscribe;
          setDate(snap);
        },
        (error: any) => {}
      );
      setDate(data);
    })();

    return () => _unsubscribe && _unsubscribe();
  }, [user]);

  useEffect(() => {
    if (!user) navigate("/auth");
  }, [user]);

  return (
    <AppProviderContext.Provider value={{ data, setDate, user, setUser }}>{props.children}</AppProviderContext.Provider>
  );
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

const tst = {
  userId: "isana",
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
};
