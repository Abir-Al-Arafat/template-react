import { Outlet, NavLink } from "react-router";
import { ThemeToggle } from "../atoms/ThemeToggle";

const MainLayout = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-slate-900 text-white"
        : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-slate-200">
        <div className="flex items-center gap-8">
          <div className="text-xl font-extrabold tracking-tight">
            React<span className="text-blue-600">Boilerplate</span>
          </div>

          <nav className="hidden md:flex space-x-2">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
          </nav>
        </div>

        <ThemeToggle />
      </header>

      <main className="p-6 md:p-12 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
