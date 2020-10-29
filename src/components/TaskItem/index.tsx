import React from 'react'
import htmlToString from 'html-to-text'
import { Task, ViewType } from '../../store/models/tasks'
import { Typography, Button } from '@material-ui/core'
import { TechStack } from '../TeckStack'
import { getTaskPrice } from '../../utils'
import { useStyles } from './styles'
import { Config } from '../../config'
import clsx from 'clsx'

interface TaskItemProps {
  task: Task;
  view: ViewType;
  showFilter: boolean;
}

/**
 * Component shown in task list as an item
 * @param TaskItemProps
 */
export const TaskItem = ({ task, view, showFilter }: TaskItemProps) => {
  const styles = useStyles()
  const truncated = htmlToString.fromString(task.description).substring(0, Config.TASK_DESCRIPTION_LIMIT)
  const title = htmlToString.fromString(task.name)
  const striped = task.description.length > Config.TASK_DESCRIPTION_LIMIT ? `${truncated}...` : `${truncated}`
  const isList = view === 'list'

  const onViewTask = () => {
    window.open(`${Config.APP_URL}/${task.id}`, '_blank')
  }

  return (
    <div className={clsx(styles.taskItem, {
      [styles.list]: isList,
      [styles.taskItemFilterOpened]: showFilter
    })}>
      <div className={styles.content}>
        <div className={clsx(styles.titleWrapper, {
          [styles.list]: isList
        })}>
          <Typography variant="h4" className={clsx(styles.title, {
            [styles.list]: isList
          })}>{title}</Typography>
          <TechStack techStack={task.tags || []} view={view} />
        </div>
        <div className={clsx(styles.description, {
          [styles.list]: isList
        })}>{striped}</div>
      </div>

      <div className={clsx(styles.taskItemFooter, {
        [styles.list]: isList
      })}>
        <div className={clsx(styles.taskPrizeWrapper, {
          [styles.list]: isList
        })}>
          <div className={styles.prizeTitle}>Prize</div>
          <div className={styles.prizeAmount}>{getTaskPrice(task.prizeSets)}</div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.viewTask}
            variant="contained"
            color="primary"
            onClick={onViewTask}
          >
            View Task
          </Button>
        </div>
      </div>
    </div>
  )
}
