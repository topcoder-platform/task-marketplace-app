import React from 'react'

import TopBarContainer from '../TopBarContainer'
import TaskList from '../TaskListContainer'

export default () => {
  return (
    <div className="task-page">
      <TopBarContainer />
     <TaskList />
    </div>
  )
}
