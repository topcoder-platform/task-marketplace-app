import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  listWrapper: {
    marginTop: 26,
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    marginRight: -20,
    '&$list': {
      flexDirection: 'column',
      marginRight: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 22,
      marginRight: 0
    }
  },
  overflowHiddenWrapper: {
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      overflow: 'none'
    }
  },
  list: {},
  loaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '16px 0'
  },
  loaderFullHeight: {
    height: 800,
    alignItems: 'flex-start'
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '16px 0'
  },
  showMoreButton: {
    borderRadius: 20
  }
}))
