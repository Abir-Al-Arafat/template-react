import { useAppSelector } from "../../store/hooks";

const HomePage = () => {
  const theme = useAppSelector((state) => state.app.theme);

  return (
    <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="text-slate-600">
        Welcome to your new React Boilerplate. This is the main landing page.
      </p>

      <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 mt-4">
        <p className="text-sm text-slate-500">Global Redux State Test:</p>
        <p className="font-medium text-slate-800">
          Current Theme:{" "}
          <span className="text-blue-600 uppercase font-bold">{theme}</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
