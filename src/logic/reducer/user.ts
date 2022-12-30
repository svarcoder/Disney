import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: "",
	photo: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserLoginDetails: (state: any, action: any) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},

		setSignOutState: (state: any) => {
			state.name = null;
			state.email = null;
			state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state: any) => state.user.name;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;

export default userSlice.reducer;
