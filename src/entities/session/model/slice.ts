import { createSlice } from '@reduxjs/toolkit'
import { sessionApi } from '../api/sessionApi'

type SessionSliceState = {
  accessToken: string | null
}

const initialState: SessionSliceState = {
  accessToken: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState as SessionSliceState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(sessionApi.endpoints.token.matchFulfilled, (state: SessionSliceState, { payload }) => {
      state.accessToken = payload.accessToken
    })
  },
})

export const { clearSessionData } = sessionSlice.actions
