import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getQuiz = createAsyncThunk('/lesson/quiz', async (params) => {
    const response = await UserAuthApi.getQuestion(params);

    return response.json();
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: [],
    status: null, 
  },

  extraReducers: {
    [ getQuiz.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getQuiz.fulfilled ]: (state, {payload}) => {
      state.quiz = payload
      state.status = 'success'
    },

    [ getQuiz.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default quizSlice.reducer;
