import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Filter } from '../models/filter'

/**
 * redux init state
 */
const initState: Filter | null = {
  groupTotalCount: 0,
  groups: [],
  selectedGroup: '',
  techStack: []
}

/**
 * redux actions
 */
export const { actions, ...filterSlice } = createSlice({
  name: 'filter',
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
 * update filter
 */
const updateFilter = (filter: Filter) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.setInfo(filter))
}

export const filterActions = {
  ...actions,
  updateFilter
}
