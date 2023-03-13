import "./config/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "./config/firebase";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./config/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, ToastContainer } from "./config/styled.main";
import { routes } from "./routes";
import { AppProvider } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={DarkTheme}>
          <Main>
            <ToastContainer
              position="bottom-right"
              autoClose={50000000000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Routes>
              {routes.map((item, index) => (
                <Route path={item.path} element={<item.component />} key={item.name} />
              ))}
            </Routes>
          </Main>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
