import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  listWrapper: {
    padding: '46px 32px 46px 32px',
    [theme.breakpoints.down('sm')]: {
      padding: '33px 15px 33px 15px'
    }
  },
  title: {
    fontFamily: theme.fontFamily.barlowCondensed,
    color: '#2A2A2A',
    fontSize: 48,
    lineHeight: '50px',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      lineHeight: '36px'
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  filterIconWrapper: {
    color: theme.colorTheme.darkGreen,
    fontFamily: theme.fontFamily.roboto,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '30px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: 10,
    maxWidth: 115
  },
  filterIcon: {
    marginRight: 14,
    height: 14
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  filterWrapper: {
    marginTop: 26
  }
}))
