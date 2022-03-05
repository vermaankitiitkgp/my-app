import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './components/education/educationSlice';
import skillsReducer from "./components/skills/skillsSlice";
import expReducer from "./components/exp/expSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
    exp: expReducer
  },
});
