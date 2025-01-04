import apiClient from './apiClient';

const attendanceService = {
  markAttendance: async (courseId, studentId) => {
    try {
      const response = await apiClient.post(`/attendance/mark`, { courseId, studentId });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getAttendance: async (courseId) => {
    try {
      const response = await apiClient.get(`/attendance/${courseId}`);
      return response.data.attendance; // Returns attendance records
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default attendanceService;
