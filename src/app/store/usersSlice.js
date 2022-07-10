import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  dataLoaded: false,
  users: null
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.dataLoaded = true;
      state.users = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const {reducer: usersReducer, actions} = usersSlice;
const {fetching, fetchSuccess, fetchError} = actions;

export const loadUsersList = () => async (dispatch, getState) => {
  dispatch(fetching());
  try {
    const content = await fetch("http://localhost:3004/users");
    const usersContent = await content.json();
    dispatch(fetchSuccess(usersContent));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const getUsersList = () => state => state.users.users;

export const getDataStatus = () => state => state.users.dataLoaded;

export const getUsersLoadingStatus = () => state => state.users.isLoading;

export const getUserById = (userId) => state => {
  if (state.users.entities) return state.users.entities.find(u => u._id === userId);
};

export default usersReducer;