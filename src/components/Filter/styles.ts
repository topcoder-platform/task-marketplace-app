import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  filterWrapper: {
    backgroundColor: theme.colorTheme.white,
    marginRight: 20,
    paddingTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    width: 290,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '30%',
    maxHeight: '100%',
    [theme.breakpoints.down(961)]: {
      minHeight: '100%',
      width: '100%',
      borderRadius: 0,
      border: 'none',
      paddingTop: 40
    }
  },
  title: {
    fontFamily: theme.fontFamily.barlow,
    fontWeight: 500,
    fontSize: 16,
    textTransform: 'uppercase',
    flex: 1
  },
  closeIcon: {
    padding: 10,
    cursor: 'pointer'
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    overflow: 'auto',
    flex: 1,
    paddingTop: 20
  },
  chip: {},
  deleteIcon: {
    width: 8,
    height: 8
  },
  eachChip: {
    borderRadius: 5,
    marginRight: 10,
    paddingRight: 5,
    marginBottom: 5
  },
  chipLabel: {
    fontSize: 12,
    fontFamily: theme.fontFamily.roboto,
    color: theme.colorTheme.black
  },
  checboxGreen: {
    color: theme.colorTheme.grey
  },
  checboxChecked: {
    color: `${theme.colorTheme.lightGreen}!important`
  },
  groupWrapper: {
    marginTop: 28
  },
  groupLabel: {
    fontFamily: theme.fontFamily.roboto,
    fontSize: 14,
    lineHeight: '17px',
    marginBottom: 12
  },
  showAllLabel: {
    fontFamily: theme.fontFamily.roboto,
    fontSize: 12,
    lineHeight: '30px',
    color: theme.colorTheme.darkGreen,
    fontWeight: 700
  },
  showAllButton: {
    marginLeft: 23
  },
  groupsList: {
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    margin: '32px 0'
  },
  applyFilterButton: {
    borderRadius: 20
  },
  techStackWrapper: {
    position: 'relative',
    [theme.breakpoints.down(961)]: {
      marginTop: 30
    }
  },
  techStackLabel: {
    position: 'absolute',
    top: -14,
    left: 10,
    backgroundColor: theme.colorTheme.white,
    padding: '5px 10px',
    fontFamily: theme.fontFamily.roboto,
    fontSize: 12,
    color: theme.colorTheme.grey
  },
  chips: {
    minHeight: 60,
    border: `1px solid ${theme.colorTheme.grey}`,
    borderRadius: 10,
    boxSizing: 'border-box',
    padding: '18px 10px 10px 10px'
  },
  techStackChipInput: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    },
    fontFamily: theme.fontFamily.roboto,
    fontSize: 12
  },
  techStackOption: {
    minHeight: '40px'
  },
  techStackListBox: {
    maxHeight: '270px',
    fontFamily: theme.fontFamily.roboto,
    fontSize: 12
  }
}))
