import React from 'react'
import { Task, ViewType } from '../../store/models/tasks'
import { TaskItem } from '../TaskItem'
import { useStyles } from './styles'
import { Button } from '@material-ui/core'
import Loader from 'react-loader-spinner'
import clsx from 'clsx'

interface TaskListProps {
  list: Task[];
  view: ViewType;
  onShowMore: () => void;
  loading: boolean;
  showLoadMore: boolean;
  showFilter: boolean;
}

/**
 * Shows the list of task based on the view type
 * @param TaskListProps
 */
export const TaskList = ({
  list,
  onShowMore,
  view,
  loading,
  showLoadMore,
  showFilter
}: TaskListProps) => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      {/* This extra layer of div(overflowHiddenWrapper) is needed to hide the margin right of last child of every row */}
      {
        list.length > 0 && (
          <div className={styles.overflowHiddenWrapper}>
            <div className={clsx(styles.listWrapper, {
              [styles.list]: view === 'list'
            })}>
              {
                list.map((task: Task, index: number) => (
                  <TaskItem showFilter={showFilter} key={index} task={task} view={view} />
                ))
              }
            </div>
          </div>
        )
      }
      <div className={clsx(styles.loaderWrapper, {
        [styles.loaderFullHeight]: loading && list.length === 0
      })}>
        {loading && <Loader type="Rings" color="#137D60" height={80} width={80}/>}
      </div>
      <div className={styles.buttonWrapper}>
        {
          !loading && showLoadMore && list.length !== 0 && (
            <Button
              onClick={onShowMore}
              className={styles.showMoreButton}
              variant="outlined"
              color="primary">
                Show More
            </Button>
          )
        }
      </div>
    </div>
  )
}
