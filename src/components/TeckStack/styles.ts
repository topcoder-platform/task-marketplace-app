import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  techStackWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 15,
    '&$list': {
      marginBottom: 10,
      marginTop: 0
    }
  },
  list: {},
  techStack: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: theme.colorTheme.white,
    borderColor: theme.colorTheme.black,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    fontFamily: theme.fontFamily.roboto,
    fontSize: 11,
    cursor: 'pointer'
  },
  emptyTechstack: {
    paddingBottom: 30
  }
}))
