import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DashboardAPI from '../../api/DashboardAPI';

export const fetchDashboard = createAsyncThunk('dashboard/id', async (params) => {
    const response = await DashboardAPI.index(params);

    return response.json();
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboard: [],
    status: null, 
  },

  extraReducers: {
    [ fetchDashboard.pending ]: (state) => {
      state.status = 'loading'
    },

    [ fetchDashboard.fulfilled ]: (state, {payload}) => {
      state.dashboard = payload
      state.status = 'success'
    },

    [ fetchDashboard.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default dashboardSlice.reducer;
