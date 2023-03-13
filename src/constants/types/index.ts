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
  userId: string;
  boards: AppProviderPropsBoards[];
  columns: AppProviderPropsColumns[];
}
interface AppProviderPropsColumns {
  title: string;
  id: string;
}
export interface AppProviderPropsBoards {
  name: string;
  slug: string;
  tasks?: AppProviderPropsBoardTasks[];
}
interface AppProviderPropsBoardTasks {
  title: string;
  id: string;
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
