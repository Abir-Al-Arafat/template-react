import { NavLink } from "react-router";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800">Page Not Found</h2>
      <p className="text-slate-500 mt-2 mb-6">
        The route you are looking for does not exist.
      </p>
      <NavLink
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
