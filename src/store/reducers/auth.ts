import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Auth } from '../models/auth'

/**
 * redux init state
 */
const initState: Auth | null = null

/**
 * redux actions
 */
export const { actions, ...authSlice } = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setInfo (state, { payload }) {
      return {
        ...(state || {}),
        ...payload
      }
    }
  }
})

/**
 * update auth
 */
const updateAuth = (auth: Auth) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.setInfo(auth))
}

export const authActions = {
  ...actions,
  updateAuth
}
