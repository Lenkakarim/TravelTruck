import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, params }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/campers?${params}&limit=${limit}&page=${page}`
      );
      return data;
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkApi.fulfillWithValue({
          items: [],
          total: 0,
        });
      }
      return thunkApi.rejectWithValue(
        error.message || "Something went wrong"
      );
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchOne",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message || "Something went wrong"
      );
    }
  }
);
