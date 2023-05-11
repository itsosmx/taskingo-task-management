import "./config/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "./config/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, ToastContainer, Body } from "./config/styled.main";
import { routes } from "./routes";
import { AppProvider, Navbar, Sidebar } from "./components";
import { setupStorage } from "./services/localStorage";

export default function App() {
  setupStorage();

  return (
    <BrowserRouter>
      <AppProvider>
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
        <Main>
          <Navbar />
          <Sidebar />
          <Body>
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} element={<item.component />} key={item.name} />
              ))}
            </Routes>
          </Body>
        </Main>
      </AppProvider>
    </BrowserRouter>
  );
}

/*

{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth.uid === $uid",
        ".write": "auth.uid === $uid",
      },
    }
  }
}

*/
