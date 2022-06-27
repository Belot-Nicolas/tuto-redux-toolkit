import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // {type: "todo/addTask" , PAYLOAD: "aller faire les courses"}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // {type: "todo/toggleTask", payload: 20 (c'est l'id) }
      const task = state.find((tache) => tache.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // {type: "tod/deleteTask", payload: 20 (c'est l'id) }
      state = state.filter((t) => t.id !== action.payload);
      return state
    },
  },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

// action creator
// export const createToggle = (id) => {
//     return {
//       type: "todo/toggleTask",
//       payload: id,
//     };
//   };

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});


