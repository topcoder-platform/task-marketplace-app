import React from 'react'

import { useAsync } from 'react-async'
import * as challengesApi from '../api/challenges'

import TaskCard from './TaskCard'

export default () => {
  const { data, isPending } = useAsync(challengesApi.getAllTask)

  if (isPending) return (
    <div>Loading...</div>
  )

  console.log(data)

  return (
    <div className="ui container segment">
      <div className="ui cards">
        { data.map((task) => <TaskCard task={ task } />) }
      </div>
    </div>
  )
}
