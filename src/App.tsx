// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router";

// 1. Import your Layout Template
import MainLayout from "./components/templates/MainLayout";

// 2. Import your Pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import DashboardPage from "./components/pages/DashboardPage";
import NotFoundPage from "./components/pages/NotFoundPage";

// 3. Configure the Router
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
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

// 4. Export the Application
export default function App() {
  return <RouterProvider router={router} />;
}
