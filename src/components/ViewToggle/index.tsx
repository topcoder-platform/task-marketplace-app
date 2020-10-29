import React from 'react'
import clsx from 'clsx'
import { useStyles } from './styles'
import CardGreyIcon from '../../assets/card-grey.svg'
import ListGreyIcon from '../../assets/list-grey.svg'
import CardGreenIcon from '../../assets/card-green.svg'
import ListGreenIcon from '../../assets/list-green.svg'
import { ViewType } from '../../store/models/tasks'

interface ViewToggleProps {
  view: ViewType;
  onToggleView: (view: ViewType) => void;
}

/**
 * The component used to toggle between card and list view
 * @param ViewToggleProps
 */
export const ViewToggle = ({ view, onToggleView }: ViewToggleProps) => {
  const styles = useStyles()
  return (
    <div className={styles.toggleWrapper}>
      <img onClick={() => onToggleView('list')} className={clsx(styles.toggleIcon, styles.cardIcon)} src={view === 'list' ? ListGreenIcon : ListGreyIcon} alt="list view button" />
      <img onClick={() => onToggleView('card')} className={styles.toggleIcon} src={view === 'card' ? CardGreenIcon : CardGreyIcon} alt="card view button" />
    </div>
  )
}
