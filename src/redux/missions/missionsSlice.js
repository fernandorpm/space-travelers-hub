/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMissions = createAsyncThunk('missions/fetchAllMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  // const books = Object.entries(response).map((book) => ({
  //   item_id: book[0],
  //   title: book[1][0].title.split('/')[0],
  //   author: book[1][0].title.split('/')[1],
  //   category: book[1][0].category,
  // }));
  return response.data;
});

// export const createBook = createAsyncThunk('books/createBook', async ({
//   item_id, author, category, title,
// }) => {
//   title = title.concat(`/${author}`);
//   await access.postApi(routes.MAIN, { item_id, category, title });
// });

// export const deleteBook = createAsyncThunk('books/deleteBook', async ({ id }) => {
//   await access.deleteApi(routes.MAIN, { item_id: id });
// });

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMissions.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllMissions.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
    // builder
    //   .addCase(createBook.fulfilled, (state, action) => {
    //     state.loading = 'idle';
    //     state.entities = [...state.entities, action.meta.arg];
    //   })
    //   .addCase(createBook.pending, (state) => {
    //     state.loading = 'pending';
    //   });
    // builder
    //   .addCase(deleteBook.fulfilled, (state, action) => {
    //     state.loading = 'idle';
    //     const filterArr = state.entities.filter((book) => book.item_id !== action.meta.arg.id);
    //     state.entities = filterArr;
    //   })
    //   .addCase(deleteBook.pending, (state) => {
    //     state.loading = 'pending';
    //   });
  },
});
export default missionsSlice.reducer;
