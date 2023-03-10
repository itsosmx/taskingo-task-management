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
      },
      {
        name: "Marketing Plans",
        slug: "m-plans",
      },
      {
        name: "Road map",
        slug: "r-map",
      },
    ],
  });
  const isMount = React.useRef(true);

  return <AppProviderContext.Provider value={{ data, setDate }}>{props.children}</AppProviderContext.Provider>;
}
