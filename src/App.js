import React from 'react';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteAllTasks } from './redux/tasksSlice';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const dispatch = useDispatch();

  // Function to handle deleting all tasks
  const handleDeleteAll = () => {
    dispatch(deleteAllTasks());
  };

  return (
    // Container component to limit the maximum width of the content
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom style={{ color: '#ff6347' }}>
          Todo List
        </Typography>
        <AddTask />
        <TaskList />
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteAll}
            style={{ maxWidth: '200px', width: '100%' }}
          >
            Delete All
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
