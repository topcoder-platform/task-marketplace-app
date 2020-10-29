import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => (
  {
    headerWrapper: {
      minHeight: 80,
      backgroundColor: theme.colorTheme.black,
      display: 'flex',
      flexDirection: 'row',
      flex: 1
    },
    logoWrapper: {
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      }
    },
    logo: {
      padding: 30
    },
    menuIconWrapper: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems: 'center'
      },
      display: 'none'
    },
    menuIcon: {
      [theme.breakpoints.down('sm')]: {
        width: 24,
        height: 16,
        padding: 20
      }
    }
  }
))
