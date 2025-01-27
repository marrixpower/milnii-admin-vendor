import { TInitialState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TInitialState = {
  name: '',
  sortBy: 'createdAt',
  order: -1,
  page: 1,
  limit: '20',
};

const categoriessSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    changeLimit: (state, { payload }: PayloadAction<string>) => {
      state.limit = payload;
    },
    setSort: (state, { payload }: PayloadAction<string>) => {
      state.sortBy = payload;
    },
    setOrder: (state, { payload }: PayloadAction<1 | -1>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
  },
});

export const categoriesActions = categoriessSlice.actions;
export const categoriesReducer = categoriessSlice.reducer;
