import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import favorites from "../components/layouts/favorites";

const initialState = {
  isLoading: false,
  error: null,
  dataLoaded: false,
  users: null,
  favorites: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.dataLoaded = true;
      state.users = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addFavoriteUser(state, action) {
    //   if (!Array.isArray(state.users.favorites)) {
    //     state.users.favorites = [];
    //   }
    //   const { id } = state.users.users.findIndex((u) => u._id === action.payload);
    //   state.users.users[id].bookmark = !state.users.users[id].bookmark;
    //   state.users.favorites.push(state.users.users[id]);
    //   localStorage.setItem("favorites", state.users.favorites);
    // },
    removeFavoriteUser(state, action) {
      state.favorites = state.favorites.filter((u) => u.id !== action.payload);
    },
    getStatus(state, action) {
      console.log(state);
      console.log(action);
      // const user = state.users.users[state.users.users.findIndex(u => u.id === action.payload.id)] = action.payload;
      // const user = action.payload;
      // console.log(user);
      state.users.favorites.push(action.payload);
      console.log(state.users.favorites);
      localStorage.setItem("favorites", state.users.favorites);
    }
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const { fetching, fetchSuccess, fetchError, getStatus, addFavoriteUser } = actions;

export const loadUsersList = () => async (dispatch) => {
  dispatch(fetching());
  try {
    const content = await fetch("http://localhost:3004/users");
    const usersContent = await content.json();
    dispatch(fetchSuccess(usersContent));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const getBookmark = (user) => async (dispatch) => {
  try {
    await dispatch(getStatus(user));
  } catch (e) {
    console.log(e);
  }
};

export const getUsersList = () => (state) => state.users.users;

export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getUsersLoadingStatus = () => (state) => state.users.isLoading;

export const getUserById = (userId) => (state) => {
  if (state.users.users) return state.users.users.find((u) => u.id === userId);
};

export const getFavoriteUsers = () => (state) => state.favorites;

export const pushIntoFavorites = (id) => async (dispatch) => {
  const content = await fetch("http://localhost:3004/users");
  const usersContent = await content.json();
  console.log(id);
  console.log(localStorageService.addBookmark(usersContent));
  // dispatch(addFav(1));
};

// export const removeOutOfFavorites = (id) => async (dispatch) => {
//   dispatch(removeFavoriteUser(id));
//   try {
//     localStorage.removeItem(USERS);
//     localStorage.setItem(USERS, state.favorites);
//   } catch (e) {
//     dispatch(fetchError(e.message));
//   }
// };

export default usersReducer;
