import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import LoginPage from "../components/login/LoginPage";
import LoginLayout from "../Layout/LoginLayout";
export const router = createBrowserRouter([
  {
    element: <LoginLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "login/", element: <LoginPage /> },
    ],
  },
]);
