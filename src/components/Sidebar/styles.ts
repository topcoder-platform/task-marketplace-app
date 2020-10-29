import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    width: 0,
    height: 687,
    transition: 'width 0.2s',
    overflow: 'hidden'
  },
  sidebarShown: {
    width: 310
  }
}))
