import apiClient from './apiClient';

const authService = {
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      return response.data; // Contains the token and user info
    } catch (error) {
      throw error.response.data; // Handle error messages from the backend
    }
  },

  register: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/register', { email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;
