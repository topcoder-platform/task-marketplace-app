import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  taskItem: {
    width: 326,
    minHeight: 255,
    backgroundColor: theme.colorTheme.deepGrey,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginRight: 24,
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
      marginRight: 0
    },
    [theme.breakpoints.up('md')]: {
      width: '30%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '23%'
    },
    [theme.breakpoints.up('xl')]: {
      width: '23%'
    },
    [theme.breakpoints.up('xxl')]: {
      width: 363
    },
    '&$list': {
      width: 'auto',
      marginRight: 0,
      flexDirection: 'row',
      minHeight: 131,
      [theme.breakpoints.down('sm')]: {
        minHeight: 225,
        flexDirection: 'column'
      }
    }
  },
  taskItemFilterOpened: {
    [theme.breakpoints.up('md')]: {
      width: '46%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '30.5%'
    },
    [theme.breakpoints.up('xl')]: {
      width: '31%'
    },
    [theme.breakpoints.up('xxl')]: {
      width: 382
    }
  },
  list: {},
  content: {
    flex: 1
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: theme.fontFamily.barlow,
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 500,
    '&$list': {
      minHeight: 'auto',
      marginTop: 4,
      marginBottom: 7,
      [theme.breakpoints.down('sm')]: {
        minHeight: 48,
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '&$list': {
      flexDirection: 'column-reverse',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    }
  },
  description: {
    fontFamily: theme.fontFamily.roboto,
    fontSize: 14,
    color: '#555555',
    overflow: 'hidden',
    wordBreak: 'break-all',
    '&$list': {
      maxHeight: 'none',
      minHeight: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxHeight: 100,
        minHeight: 100
      }
    }
  },
  taskItemFooter: {
    display: 'flex',
    '&$list': {
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start'
      }
    }
  },
  taskPrizeWrapper: {
    '&$list': {
      marginRight: 60,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0
      }
    }
  },
  prizeTitle: {
    fontFamily: theme.fontFamily.roboto,
    color: theme.colorTheme.lightGrey,
    fontSize: 14,
    lineHeight: '22px'
  },
  prizeAmount: {
    fontFamily: theme.fontFamily.barlowCondensed,
    lineHeight: '38px',
    fontSize: 34,
    fontWeight: 500,
    color: theme.colorTheme.black
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    display: 'flex',
    marginBottom: 3
  },
  viewTask: {
    borderRadius: 20
  }
}))
