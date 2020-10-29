import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: theme.colorTheme.black,
    minHeight: 163,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 80px'
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    justifyContent: 'center',
    borderBottom: '2px solid #555555',
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none'
    }
  },
  linkWrapper: {
    marginTop: 22,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  linkText: {
    color: theme.colorTheme.grey,
    fontSize: 14,
    fontFamily: theme.fontFamily.roboto,
    lineHeight: '21px',
    textDecoration: 'none'
  },
  linkWithMargin: {
    marginRight: 20
  }
}))
