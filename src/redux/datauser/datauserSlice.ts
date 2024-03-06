import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DataUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface DataUserState {
  userList: DataUser[];
}

const initialState: DataUserState = {
  userList: [],
};

const dataUserSlice = createSlice({
  name: "datauser",
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>
    ) => {
      state.userList.push({
        id: state.userList.length,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      });
    },
  },
});

export const { add } = dataUserSlice.actions;
export default dataUserSlice.reducer;
