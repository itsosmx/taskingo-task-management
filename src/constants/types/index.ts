export interface Theme {
  primary: string;
  secondary: string;
  text: string;
  gray: string;
  [key: string]: string;
}

export interface RoutesProps {
  name: string;
  component: React.FunctionComponent;
  path: string;
}

export interface AppProviderProps {
  uid: string;
  boards: {
    [key: string]: AppProviderPropsBoards;
  };
  columns: {
    [key: string]: AppProviderPropsColumns;
  };
}
export interface AppProviderPropsColumns {
  title: string;
  id: string;
  boardSlug: string;
  color?: string;
}
export interface AppProviderPropsBoards {
  name: string;
  slug: string;
  tasks?: {
    [key: string]: AppProviderPropsBoardTasks;
  };
}
export interface AppProviderPropsBoardTasks {
  _id?: string;
  title: string;
  description: string;
  subtasks?: AppProviderPropsBoardSubtasks[];
  status: string;
  createAt?: number;
}
interface AppProviderPropsBoardSubtasks {
  content: string;
  status: boolean;
  updateAt: number;
  id: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface AppSettingsProps {
  isDarkTheme: boolean;
}
