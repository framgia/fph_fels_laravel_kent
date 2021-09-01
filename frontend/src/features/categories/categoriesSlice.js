import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getCategories = createAsyncThunk('quizzes/all', async () => {
    const response = await UserAuthApi.getQuizzes();

    return response.json();
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    quizzes: [],
    status: null, 
  },

  extraReducers: {
    [ getCategories.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getCategories.fulfilled ]: (state, {payload}) => {
      state.quizzes = payload
      state.status = 'success'
    },

    [ getCategories.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default categoriesSlice.reducer;
