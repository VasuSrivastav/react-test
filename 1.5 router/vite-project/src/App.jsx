import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import NavBar from "./components/NavBar";
import Help from "./components/help";
import NoPage from "./components/NoPage";
import ParamHandle from "./components/ParamHandle";
import { createContext } from "react";
import NavigateUseingButton from "./components/NavigateUseingButton";
const router = createBrowserRouter([
  // pass param in url and get in render
  {
    path: "/athome/:id",
    element: (
      <div>
        <NavBar />
        <ParamHandle />
        {/* <NavigateUseingButton /> */}
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home/>
      </div>
    ),
  },
  // way2
  // {
  //   path: "/",
  //   element: <Home/>,
  // },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
        <NavigateUseingButton />
      </div>
    ),
  },
  {
    path: "/help",
    element: (
      <div>
        <NavBar />
        <Help />
        <NavigateUseingButton/>
      </div>
    ),
  },
  {
    path: "/*",
    element: (
      <div>
        <NavBar />
        <NoPage />
        <NavigateUseingButton />
      </div>
    ),
  },
]);
const userContext = createContext();
function App() {
  const [page, setPage] = useState('/');

  return (
    <div>
      <userContext.Provider value={{ page, setPage }}>
      <RouterProvider router={router} />
      </userContext.Provider>
    </div>
  );
}

export default App;
export { userContext };
