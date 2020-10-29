import React, { ReactNode } from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'

interface SidebarProps {
  show: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * Sidebar component which can be collapsed from the left
 * @param SidebarProps
 */
export const Sidebar = ({
  show,
  children,
  className
}: SidebarProps) => {
  const styles = useStyles()
  return (
    <div className={clsx(styles.sidebarWrapper, className, {
      [styles.sidebarShown]: show
    })}>
      {children}
    </div>
  )
}
