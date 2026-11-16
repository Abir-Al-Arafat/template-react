// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router";

// 1. Import your Layout Template
import MainLayout from "./components/templates/MainLayout";

// 2. Import your Pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import DashboardPage from "./components/pages/DashboardPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";

// 3. Import Protected Route
import ProtectedRoute from "./components/atoms/ProtectedRoute";

// 4. Configure the Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

// 5. Export the Application
export default function App() {
  return <RouterProvider router={router} />;
}
