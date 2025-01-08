import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import attendanceService from '../../services/attendanceServices';
import { jwtDecode } from 'jwt-decode'; // Use default import

const Attendance = () => {
  const [courseId, setCourseId] = useState('');
  const [status, setStatus] = useState('Present');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token); // Use default import
  const studentId = decodedToken.id;

  const handleMarkAttendance = async () => {
    try {
      await attendanceService.markAttendance(courseId, studentId, status);
      alert('Attendance marked successfully!');
      fetchAttendanceRecords();
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  const fetchAttendanceRecords = async () => {
    try {
      const records = await attendanceService.getAttendance(courseId);
      setAttendanceRecords(records);
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchAttendanceRecords();
    }
  }, [courseId]);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>Mark Attendance</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <FormControl fullWidth margin="normal">
        <InputLabel>Course ID</InputLabel>
        <Select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
          {/* Replace with dynamic course options */}
          <MenuItem value="1">Course 1</MenuItem>
          <MenuItem value="2">Course 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Absent">Absent</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" fullWidth onClick={handleMarkAttendance}>
        Mark Attendance
      </Button>
      <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>Attendance Records</Typography>
      {attendanceRecords.map((record) => (
        <Box key={record.id} sx={{ mb: 2 }}>
          <Typography>Student ID: {record.student_id}</Typography>
          <Typography>Date: {record.date}</Typography>
          <Typography>Status: {record.status}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Attendance;