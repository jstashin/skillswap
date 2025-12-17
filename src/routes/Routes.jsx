import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Signup from "../layouts/Signup";
import Login from "../layouts/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SkillDetailsPage from "../pages/SkillDetailsPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch("/skillsData.json"),
        element: <Home />,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/skills/:id",
        loader: () => fetch("/skillsData.json"),
        element: (
          <PrivateRoute>
            <SkillDetailsPage />
          </PrivateRoute>
        ),
      },
      { path: "/signUp", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
]);
