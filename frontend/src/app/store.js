import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import profileReducer from '../features/profile/profileSlice';
import usersReducer from '../features/users/usersSlice';
import userReducer from '../features/user/userSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import quizReducer from '../features/quiz/quizSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    profile: profileReducer,
    users: usersReducer,
    user: userReducer,
    categories: categoriesReducer,
    quiz: quizReducer
  }
});
