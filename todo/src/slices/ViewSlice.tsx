import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilteredQuerys, ISortedQuerys } from "../typeinterfaces/types";
const initialState: ISortedQuerys & IFilteredQuerys = {
  filterValues: [],
  sortedQuery: "created",
};
const viewTaskSlice = createSlice({
  name: "viewTaskSlice",
  initialState,
  reducers: {
    getFilterValue: (state, action: PayloadAction<IFilteredQuerys>) => {
      console.log("action filter", action.payload.filterValues);
      state.filterValues = action.payload.filterValues;
    },
    getSortedValue: (state, action: PayloadAction<string>) => {
      console.log("action sorted", action.payload);
      state.sortedQuery = action.payload;
    },
  },
});
export const { getFilterValue, getSortedValue } = viewTaskSlice.actions;
export default viewTaskSlice;
