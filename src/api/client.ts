// src/api/client.ts
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => {
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    // dynamically pull auth tokens here later:
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    // Standardize global errors (e.g., handling 401 Unauthorized here)
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "API request failed");
  }

  return response.json();
};
