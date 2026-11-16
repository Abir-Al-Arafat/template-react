// src/api/client.ts
import { store } from "../store/store";
import { logout } from "../store/slices/authSlice";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => {
  const token = localStorage.getItem("token");
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    store.dispatch(logout());
  }

  if (!response.ok) {
    // Standardize global errors (e.g., handling 401 Unauthorized here)
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "API request failed");
  }

  return response.json();
};
