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
interface AppProviderPropsBoards {
  name: string;
  slug: string;
}
export interface AppProviderProps {
  boards: AppProviderPropsBoards[];
}
