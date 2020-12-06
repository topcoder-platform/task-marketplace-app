import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { disableSidebarForRoute, getAuthUserTokens } from '@topcoder/micro-frontends-navbar-app'
import { RoutesWrapper } from './routes'
import { theme } from './styles/theme'
import { useDispatch } from 'react-redux'
import { authActions } from './store/reducers/auth'
import { useErrorStore } from './store/hooks/use-error'
import { errorActions } from './store/reducers/error'
import { Config } from './config'

// configures OAuth connector

function App () {
  const dispatch = useDispatch()
  const error = useErrorStore()

  const getToken = async () => {
    let token = ''
    try {
      const authUserTokens = await getAuthUserTokens()
      token = authUserTokens.tokenV3
    } catch (e) {
      dispatch(
        authActions.updateAuth({
          isLoggedIn: false,
          checkingForToken: false
        })
      )
    }

    dispatch(
      authActions.setInfo({
        checkingForToken: true
      })
    )

    if (!token) {
      dispatch(
        authActions.updateAuth({
          isLoggedIn: false,
          checkingForToken: false
        })
      )
    } else {
      dispatch(
        authActions.updateAuth({
          isLoggedIn: true,
          checkingForToken: false
        })
      )
    }
  }

  React.useEffect(() => {
    // Get if the token is available and set the auth store
    getToken()
  }, [])

  React.useLayoutEffect(() => {
    disableSidebarForRoute(Config.APP_ROUTE)
  }, [])

  const handleClose = () => {
    dispatch(
      errorActions.setInfo({
        showError: false
      })
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <RoutesWrapper />
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={error.showError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {error.showError
          ? (
            <Alert elevation={6} variant="filled" severity="error">
              {error.message}
            </Alert>
            )
          : undefined }
      </Snackbar>
    </ThemeProvider>
  )
}

export default App
