import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getStudents = createAsyncThunk('students', async () => {
    const response = await UserAuthApi.getStudents();

    return response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    students: [],
    status: null, 
  },

  extraReducers: {
    [ getStudents.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getStudents.fulfilled ]: (state, {payload}) => {
      state.students = payload
      state.status = 'success'
    },

    [ getStudents.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default usersSlice.reducer;
