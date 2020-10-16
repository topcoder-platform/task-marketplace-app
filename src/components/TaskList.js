import React from 'react'

import TaskCard from './TaskCard'

export default ({ tasks }) => {
  return (
    <div className="ui container segment">
      <div className="ui cards">
        { tasks?.map((task) => <TaskCard task={ task } />) }
      </div>
    </div>
  )
}
