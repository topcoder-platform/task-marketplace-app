import React from 'react'
import { useStyles } from './styles'
import { useWindowSize } from '@react-hook/window-size'
import { getTasks } from '../../services/tasks'
import { useTasksStore } from '../../store/hooks/use-tasks'
import { useDispatch } from 'react-redux'
import { tasksActions } from '../../store/reducers/tasks'
import { TaskList } from '../../components/TaskList'
import { Sidebar } from '../../components/Sidebar'
import FilterIcon from '../../assets/filter.png'
import { Filter } from '../../components/Filter'
import { Config, CUT_OFFS } from '../../config'
import { useFilterStore } from '../../store/hooks/use-filter'
import { getFilterParams } from '../../utils'
import { errorActions } from '../../store/reducers/error'
import { ViewToggle } from '../../components/ViewToggle'
import { ViewType } from '../../store/models/tasks'
import { Modal } from '../../components/Modal'

/**
 * Screen shown when user visits the tasks list route
 */
export const ListView = () => {
  const styles = useStyles()
  const { list, view, page, loading, showLoadMore } = useTasksStore()
  const filter = useFilterStore()
  const dispatch = useDispatch()
  const [showFilter, setShowFilter] = React.useState<boolean>(false)
  const [width] = useWindowSize()
  const showFilterModal = width <= CUT_OFFS.TABLET

  const getTasksByPage = (page: number) => {
    dispatch(tasksActions.setInfo({
      loading: true
    }))
    const params = getFilterParams(filter)
    getTasks(page, params)
      .then((res: any) => {
        const totalChallenges = res.headers['x-total']
        dispatch(tasksActions.setInfo({
          list: page === 1 ? res.data : list.concat(res.data),
          showLoadMore: page * Config.PER_PAGE < totalChallenges
        }))
      })
      .catch((response: any) => {
        dispatch(errorActions.setInfo({
          showError: true,
          message: response.message
        }))
      })
      .finally(() => {
        dispatch(tasksActions.setInfo({
          loading: false
        }))
      })
  }

  const onToggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const onShowMore = () => {
    const nextPage = page + 1
    dispatch(tasksActions.setInfo({
      page: nextPage
    }))
    getTasksByPage(nextPage)
  }

  const onToggleView = (nextView: ViewType) => {
    dispatch(tasksActions.setInfo({
      view: nextView
    }))
  }

  const onFilterApplied = () => {
    if (showFilterModal) {
      onToggleFilter()
    }
  }

  React.useEffect(() => {
    getTasksByPage(1)
  }, [])

  return (
    <div className={styles.listWrapper}>
      <div className={styles.titleWrapper}>
        { !showFilter && (
            <div className={styles.filterIconWrapper} onClick={onToggleFilter}>
              <img className={styles.filterIcon} src={FilterIcon} alt="open filter icon" />
              <span>SHOW FILTER</span>
            </div>
        ) }
        <ViewToggle view={view} onToggleView={onToggleView} />
      </div>
      <div className={styles.contentWrapper}>
        {/* If it is more than tablet resolution show sidebar filter else show modal filter */}
        {
          showFilterModal
            ? (
              <Modal open={showFilter}>
                <Filter closeIconType="close" onCloseFilter={onToggleFilter} onFilterApplied={onFilterApplied} />
              </Modal>
              )
            : (
              <Sidebar show={showFilter} className={styles.filterWrapper}>
                <Filter closeIconType="arrow" onCloseFilter={onToggleFilter} />
              </Sidebar>
              )
        }
        <TaskList
          list={list}
          view={view}
          onShowMore={onShowMore}
          loading={loading}
          showLoadMore={showLoadMore}
          showFilter={showFilter}
        />
      </div>
    </div>
  )
}
