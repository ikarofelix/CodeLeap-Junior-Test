import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  loading: false,
  error: null,

  user: localStorage.getItem("username") || null,
  nextPage: null,
  editModal: null,
  deleteModal: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchMorePages: (state, action) => {
      state.nextPage = action.payload.next;
      state.posts.results = [...state.posts.results, ...action.payload.results];
    },
    editModal: (state, action) => {
      state.editModal = action.payload;
    },
    deleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },

    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.nextPage = action.payload.next;
      state.error = null;
    },
    fetchPostsFail: (state, action) => {
      state.loading = false;
      state.posts = null;
      state.error = action.payload;
    },

    addPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPostSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    addPostFail: (state, action) => {
      state.loading = false;
      state.posts = null;
      state.error = action.payload;
    },

    editPostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editPostSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    editPostFail: (state, action) => {
      state.loading = false;
      state.posts = null;
      state.error = action.payload;
    },

    deletePostStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deletePostSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    deletePostFail: (state, action) => {
      state.loading = false;
      state.posts = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMorePages,
  editModal,
  deleteModal,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFail,
  addPostStart,
  addPostSuccess,
  addPostFail,
  editPostStart,
  editPostSuccess,
  editPostFail,
  deletePostStart,
  deletePostSuccess,
  deletePostFail,
} = postsSlice.actions;

export default postsSlice.reducer;
