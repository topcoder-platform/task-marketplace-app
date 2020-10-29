import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  userProfileSection: {
    display: 'flex',
    paddingRight: 28,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 5
    }
  },
  loggedInUser: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '5px 10px',
    '&:hover': {
      backgroundColor: 'rgba(85, 85, 85, 0.4)',
      borderRadius: 25
    },
    [theme.breakpoints.down('sm')]: {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      width: 38,
      height: 38,
      borderRadius: 20
    }
  },
  userHandler: {
    color: theme.colorTheme.white,
    fontFamily: theme.fontFamily.roboto,
    fontWeight: 500,
    marginLeft: 4,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  emailDetails: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    height: 90,
    maxWidth: 300,
    backgroundColor: theme.colorTheme.darkGreen,
    color: theme.colorTheme.white,
    alignItems: 'center'
  },
  leftSection: {},
  rightSection: {
    marginLeft: 10
  },
  handleName: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 700,
    fontFamily: theme.fontFamily.roboto
  },
  userAvatarInMenu: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  email: {
    fontSize: 12,
    lineHeight: '14px',
    marginTop: 5,
    fontWeight: 700,
    fontFamily: theme.fontFamily.roboto,
    maxWidth: 190,
    wordBreak: 'break-word'
  },
  whiteArrow: {
    height: 8,
    marginLeft: 14,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 8
    }
  },
  menuItem: {
    paddingTop: 10,
    paddingBottom: 10
  },
  loginButton: {
    fontFamily: theme.fontFamily.roboto,
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '30px',
    margin: '0 30px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.colorTheme.white,
    [theme.breakpoints.down('sm')]: {
      margin: '0 15px',
      fontSize: 16
    }
  },
  loginWrapper: {

  }
}))
