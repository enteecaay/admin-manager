import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { isAuthenticated } from "./service/authService";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated() ? <MainLayout /> : <LoginPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "users",
          element: <UserPage />,
        },
        {
          path: "posts",
          element: <PostPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
