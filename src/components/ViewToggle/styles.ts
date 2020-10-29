import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  toggleWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  toggleIcon: {
    padding: 7,
    border: '1px solid #E9E9E9',
    cursor: 'pointer',
    borderRadius: 5
  },
  cardIcon: {
    marginLeft: 8
  }
}))
