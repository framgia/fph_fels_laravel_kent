import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getStudent = createAsyncThunk('students/id', async (user, thunkAPI) => {
    const response = await UserAuthApi.getStudent(user);

    return response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    student: [],
    status: null, 
  },

  extraReducers: {
    [ getStudent.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getStudent.fulfilled ]: (state, {payload}) => {
      state.student = payload
      state.status = 'success'
    },

    [ getStudent.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default userSlice.reducer;
