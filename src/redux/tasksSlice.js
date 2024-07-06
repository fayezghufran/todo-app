import { createSlice } from '@reduxjs/toolkit';

// Function to load tasks from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Failed to load tasks from localStorage', e);
    return [];
  }
};

// Function to save tasks to localStorage
const saveToLocalStorage = (tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.warn('Failed to save tasks to localStorage', e);
  }
};

// Redux slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadFromLocalStorage(),
  reducers: {
    // Reducer to add a task
    addTask: (state, action) => {
      const newTask = { text: action.payload, completed: false };
      state.push(newTask);
      saveToLocalStorage(state);
    },
    // Reducer to delete a task
    deleteTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
      saveToLocalStorage(state);
    },
    // Reducer to edit a task
    editTask: (state, action) => {
      const { id, newTask } = action.payload;
      state[id].text = newTask;
      saveToLocalStorage(state);
    },
    // Reducer to toggle task completion
    toggleTask: (state, action) => {
      const index = action.payload;
      state[index].completed = !state[index].completed;
      saveToLocalStorage(state);
    },
    // Reducer to delete all tasks
    deleteAllTasks: (state) => {
      state.length = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask, deleteAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
