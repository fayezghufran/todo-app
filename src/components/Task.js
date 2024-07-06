import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/tasksSlice';
import { ListItem, ListItemText, IconButton, TextField, Button, Box, Checkbox } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const Task = ({ id, task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  // Function to handle deleting a task
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  // Function to handle editing a task
  const handleEdit = () => {
    dispatch(editTask({ id, newTask }));
    setIsEditing(false);
  };

  // Function to handle toggling task completion
  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  return (
    // ListItem component for each task with flexbox styling
    <ListItem
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      divider
    >
      <Checkbox checked={task.completed} onChange={handleToggle} />
      {isEditing ? (
        <Box display="flex" alignItems="center" style={{ width: '100%' }}>
          <TextField
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ marginRight: '10px', flex: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            startIcon={<Save />}
            style={{ marginRight: '10px' }}
          >
            Save
          </Button>
        </Box>
      ) : (
        <ListItemText
          primary={task.text}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
      )}
      <div>
        {!isEditing && (
          <IconButton onClick={() => setIsEditing(true)} color="primary">
            <Edit />
          </IconButton>
        )}
        <IconButton onClick={handleDelete} color="secondary">
          <Delete />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default Task;
