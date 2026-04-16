// Token management utilities
export const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

export const setAuthToken = (token: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};

// API helper with auth header
export const authFetch = async (url: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  headers.set('Content-Type', 'application/json');

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // If unauthorized, clear token
  if (response.status === 401) {
    removeAuthToken();
    window.location.href = '/login';
  }

  return response;
};
