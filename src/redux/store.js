import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './clientSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('clientsState');
    if (serializedState === null) {
      return undefined; // Return undefined to use the initial state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined; // Return undefined on error
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('clientsState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

// Configure Redux store with persisted state
const persistedState = loadState();

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
  preloadedState: persistedState, // Initialize store with persisted state
});

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  saveState(store.getState().clients); // Save only the clients slice of state
});

export default store;
