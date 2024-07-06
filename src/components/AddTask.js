import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button, Box } from '@mui/material';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (

    // Form container with a box to manage layout
    <Box display="flex" justifyContent="center" marginBottom="20px">
      <TextField
        label="Enter your task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: '10px' }}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
};

export default AddTask;
