import React from 'react'
import LogoIcon from '../../assets/logo-grey.svg'
import { useStyles } from './styles'
import clsx from 'clsx'

/**
 * Footer component
 */
export const Footer = () => {
  const styles = useStyles()
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logoWrapper}>
        <img src={LogoIcon} alt="logo in footer" />
      </div>
      <div className={styles.linkWrapper}>
        <div className={clsx(styles.linkText, styles.linkWithMargin)}>© 2020 Topcoder</div>
        <a className={styles.linkText} href="https://www.topcoder.com/policy" target="_blank" rel="noopener noreferrer">Policies</a>
      </div>
    </div>
  )
}
