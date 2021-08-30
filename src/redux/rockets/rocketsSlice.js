/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllRockets = createAsyncThunk('rockets/fetchAllRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
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

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRockets.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllRockets.fulfilled, (state, action) => {
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
export default rocketsSlice.reducer;
