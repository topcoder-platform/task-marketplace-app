import React from 'react'
import Popover from '@material-ui/core/Popover'
import clsx from 'clsx'
import MenuItem from '@material-ui/core/MenuItem'
import { useAuthStore } from '../../store/hooks/use-auth'
import WhiteArrowIcon from '../../assets/white-arrow.png'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'
import { Config } from '../../config'

interface MenuTypes {
  label: string;
  value: string;
  sameWindow?: boolean;
  url: string;
}

/**
 * user name component which is shown in the header
 */
export const UserProfile = () => {
  const styles = useStyles()
  const auth = useAuthStore()
  const [anchorEl, setAnchorEl] = React.useState(null)

  if (!auth) return null

  const { isLoggedIn, user } = auth

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const getAvatar = (extraStyles?: any) => (
    <img className={clsx(styles.userAvatar, extraStyles)} src={user?.picture} alt="user avatar" />
  )

  const menus: MenuTypes[] = [
    {
      label: 'Settings',
      value: 'settings',
      url: `${Config.COMMUNITY_APP_URL}/settings/profile`
    },
    {
      label: 'Help',
      value: 'help',
      url: `${Config.COMMUNITY_APP_URL}/thrive/tracks?track=Topcoder&tax=Help%20Articles`
    },
    {
      label: 'Logout',
      value: 'logout',
      sameWindow: true,
      url: `${Config.SSO_URL}/?logout=true&retUrl=${window.location.origin}`
    }
  ]

  const menuClicked = (menuClicked: MenuTypes) => {
    if (menuClicked.sameWindow) {
      window.location.href = menuClicked.url
    } else {
      window.open(menuClicked.url, '_blank')
      handleClose()
    }
  }

  return (
    <div className={styles.userProfileSection}>
      <div className={styles.loginWrapper}>
        {
          isLoggedIn
            ? (
              <div className={styles.loggedInUser} onClick={handleClick}>
                {getAvatar()}
                <span className={styles.userHandler}>{user?.handle}</span>
                <img className={styles.whiteArrow} src={WhiteArrowIcon} alt="dropdown arrow" />
              </div>
              )
            : (
              <a className={styles.loginButton} href={`${Config.SSO_URL}/?retUrl=${window.location.origin}`}>Login</a>
              )
        }
      </div>

      <Popover
        id="user-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={styles.emailDetails}>
          <div className={styles.leftSection}>
            {getAvatar(styles.userAvatarInMenu)}
          </div>
          <div className={styles.rightSection}>
            <Typography variant="h4" className={styles.handleName}>{user?.handle}</Typography>
            <Typography variant="h5" className={styles.email}>{user?.email}</Typography>
          </div>
        </div>
        {
          menus.map(menu => (
            <MenuItem
              key={menu.value}
              className={styles.menuItem}
              onClick={() => menuClicked(menu)}
            >
              {menu.label}
            </MenuItem>
          ))
        }
      </Popover>
    </div>
  )
}
