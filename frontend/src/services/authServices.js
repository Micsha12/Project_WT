import apiClient from './apiClient';

const authService = {
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      return response.data; // Contains the token and user info
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Handle error messages from the backend
      } else {
        throw new Error('Network error or server is not reachable');
      }
    }
  },

  register: async (username, email, password, role) => {
    try {
      const response = await apiClient.post('/auth/register', { username, email, password, role });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('Network error or server is not reachable');
      }
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;