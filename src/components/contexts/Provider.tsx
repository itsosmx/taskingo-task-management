import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../config/themes";
import { AppProviderProps, AppSettingsProps } from "../../constants/types";
import { getCurrentUser } from "../../services/database";
import { getStorage, updateStorage } from "../../services/localStorage";

interface AppProviderContextProps {
  data: AppProviderProps;
  setDate: React.Dispatch<React.SetStateAction<AppProviderProps>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  settings: AppSettingsProps;
  setSettings: React.Dispatch<React.SetStateAction<AppSettingsProps>>;
}
export const AppProviderContext = React.createContext({} as AppProviderContextProps);

export default function Provider({ ...props }: React.PropsWithChildren) {
  const [data, setDate] = React.useState<AppProviderProps>(initialization);
  const [user, setUser] = React.useState<User | null>(null);
  const [settings, setSettings] = React.useState<AppSettingsProps>({
    isDarkTheme: true,
  });
  const isMount = React.useRef(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (response) => {
      if (response) setUser(response);
      else {
        setDate(initialization);
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;
    let _unsubscribe: Function = () => null;
    (async () => {
      const { unsubscribe, data: _data } = await getCurrentUser(
        user?.uid,
        (snap: any) => {
          _unsubscribe = unsubscribe;
          console.log("updated..");

          if (snap) setDate({ ...initialization, ...snap.val() });
        },
        (error: any) => {
          toast.error("Something went wrong", error);
        }
      );
      if (data) setDate({ ...initialization, ..._data });
    })();

    return () => _unsubscribe();
  }, [user]);

  React.useMemo(() => {
    if (isMount.current) return;
    updateStorage(settings);
  }, [settings]);

  React.useEffect(() => {
    isMount.current = true;
    const storage = getStorage();
    setSettings(storage);
    isMount.current = false;
  }, []);

  return (
    <AppProviderContext.Provider value={{ data, setDate, user, setUser, settings, setSettings }}>
      <ThemeProvider theme={settings.isDarkTheme ? DarkTheme : LightTheme}>{props.children}</ThemeProvider>
    </AppProviderContext.Provider>
  );
}
const initialization: AppProviderProps = {
  uid: "",
  boards: {},
  columns: {},
};
