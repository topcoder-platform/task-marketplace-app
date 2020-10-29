import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Error } from '../models/error'

/**
 * redux init state
 */
const initState: Error | null = {
  showError: false,
  message: ''
}

/**
 * redux actions
 */
export const { actions, ...errorSlice } = createSlice({
  name: 'error',
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
 * update error
 */
const updateError = (error: Error) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.setInfo(error))
}

export const errorActions = {
  ...actions,
  updateError
}
