import React from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'
import { useFilterStore } from '../../store/hooks/use-filter'
import { useDispatch } from 'react-redux'
import { filterActions } from '../../store/reducers/filter'
import { ViewType } from '../../store/models/tasks'

interface TechStackProps {
  techStack: string[];
  view: ViewType;
}

/**
 * Shows tech stack list
 * @param TechStackProps
 */
export const TechStack = ({ techStack, view }: TechStackProps) => {
  const styles = useStyles()
  const { techStack: techStackInFilter } = useFilterStore()
  const dispatch = useDispatch()

  const onAddTechStack = (stack: string) => {
    const isAlreadyAvailable = techStackInFilter.indexOf(stack) > -1

    if (isAlreadyAvailable) {
      return
    }

    const items = [...techStackInFilter, stack]
    dispatch(filterActions.setInfo({
      techStack: items
    }))
  }

  const getStackItem = (stack: string) => (
    <div key={stack} className={styles.techStack} onClick={() => onAddTechStack(stack)}>
      {stack}
    </div>
  )

  return (
    <div className={clsx(styles.techStackWrapper,
      view === 'card' &&
      techStack.length === 0 &&
      styles.emptyTechstack, {
        [styles.list]: view === 'list'
      })}>
      {
        techStack.map(stack => getStackItem(stack))
      }
    </div>
  )
}
