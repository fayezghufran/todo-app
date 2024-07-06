import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    // List component to display tasks
    <List style={{ width: '100%' }}>
      {tasks.map((task, index) => (
        <Task key={index} id={index} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
