import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Tasks } from '../models/tasks'

/**
 * redux init state
 */
const initState: Tasks | null = {
  list: [],
  view: 'card',
  page: 1,
  loading: false,
  showLoadMore: false
}

/**
 * redux actions
 */
export const { actions, ...tasksSlice } = createSlice({
  name: 'tasks',
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
 * update tasks
 */
const updateTasks = (tasks: Tasks) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.setInfo(tasks))
}

export const tasksActions = {
  ...actions,
  updateTasks
}
