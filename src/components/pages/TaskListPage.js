import React, { useState, useEffect } from 'react'

import TopBarContainer from '../TopBar'
import TaskList from '../TaskList'
import { getUserProfile } from '../../api/auth'
import { getAllTask } from '../../api/challenges'

export default () => {
  const [profile, setProfile] = useState()
  const [token, setToken] = useState()
  const [tasks, setTasks] = useState()

  useEffect(() => {
    getUserProfile().then((data) => {
      if (data) {
        setProfile(data.profile)
        setToken(data.token)
      }
    })
  }, [])

  useEffect(() => {
    getAllTask(token).then((tasks) => setTasks(tasks))
  }, [token])

  return (
    <div className="task-page">
      <TopBarContainer profile={ profile } />
      <TaskList tasks={ tasks } />
    </div>
  )
}
