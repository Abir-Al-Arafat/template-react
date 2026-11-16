import { useEffect, useState } from "react";
import { apiClient } from "../../api/client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUser, type User } from "../../store/slices/authSlice";

// interface ProfileResponse {
//   user: User;
// }

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  console.log("user", user);
  console.log("user?.name", user?.name);
  console.log("user?.email", user?.email);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response =
          await apiClient<ApiResponse<User>>("/v1/users/profile");
        console.log("Fetched profile data:", response.data);
        dispatch(setUser(response.data));
      } catch (err: any) {
        setError(err.message || "Failed to load profile details");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-lg font-medium text-slate-600 animate-pulse">
          Loading profile...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-md mt-10 rounded-lg bg-red-50 p-6 border border-red-200">
        <h3 className="text-red-800 font-semibold mb-2">
          Error Loading Profile
        </h3>
        <p className="text-red-700 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl bg-white rounded-2xl p-8 shadow-md border border-slate-100 mt-6">
      <div className="border-b border-slate-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-900">User Profile</h1>
        <p className="text-slate-500 mt-1">
          Manage your account information and preferences.
        </p>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-4">
          <span className="text-sm font-semibold text-slate-500">
            Full Name
          </span>
          <span className="text-slate-900 col-span-2">
            {user?.name || "N/A"}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 pb-4">
          <span className="text-sm font-semibold text-slate-500">
            Email Address
          </span>
          <span className="text-slate-900 col-span-2">
            {user?.email || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
