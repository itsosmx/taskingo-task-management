import "./config/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "./config/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, ToastContainer } from "./config/styled.main";
import { routes } from "./routes";
import { AppProvider } from "./components";
import { setupStorage } from "./services/localStorage";

export default function App() {
  setupStorage();

  return (
    <BrowserRouter>
      <AppProvider>
        <Main>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
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
            {routes.map((item) => (
              <Route path={item.path} element={<item.component />} key={item.name} />
            ))}
          </Routes>
        </Main>
      </AppProvider>
    </BrowserRouter>
  );
}
