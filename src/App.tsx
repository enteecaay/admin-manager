import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
