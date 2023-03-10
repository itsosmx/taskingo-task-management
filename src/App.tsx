import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./config/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./config/globals.css";
import { Main } from "./config/styled.main";
import { routes } from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Main>
        <BrowserRouter>
          <Routes>
            {routes.map((item, index) => (
              <Route path={item.path} element={<item.component />} key={item.name} />
            ))}
          </Routes>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  );
}
