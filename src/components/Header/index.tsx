import React from 'react'
import Logo from '../../assets/logo.png'
import { UserProfile } from '../UserProfile'
import MenuIcon from '../../assets/menu.png'
import { useStyles } from './styles'

/**
 * Header of the application
 */
export const Header = () => {
  const styles = useStyles()
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.menuIconWrapper}>
        <img className={styles.menuIcon} src={MenuIcon} alt="menu icon in header" />
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={Logo} alt="Topcoder Task Marketplace logo" />
      </div>
      <UserProfile />
    </header>
  )
}
