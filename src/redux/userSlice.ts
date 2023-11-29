"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"


interface UserState {
  id: number,
  username:string
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  username: ''
}
export const userSlice = createSlice({
  name: 'user',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserInformation: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    }
  },
})

export const { setUserInformation } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getUserInfomation = (state: RootState) => state.user

export default userSlice.reducer