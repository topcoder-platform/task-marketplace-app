import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { getFreshToken, decodeToken, isTokenExpired } from '@topcoder-platform/tc-auth-lib'

import { configureOAuthConnector } from './services/auth'
import { RoutesWrapper } from './routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { theme } from './styles/theme'
import { useDispatch } from 'react-redux'
import { authActions } from './store/reducers/auth'
import { useErrorStore } from './store/hooks/use-error'
import { errorActions } from './store/reducers/error'
import { Config } from './config'

// configures OAuth connector
configureOAuthConnector()

function App () {
  const dispatch = useDispatch()
  const error = useErrorStore()

  const getToken = async () => {
    let token = ''
    try {
      token = await getFreshToken()
    } catch (e) {
      dispatch(authActions.updateAuth({
        isLoggedIn: false,
        user: null,
        checkingForToken: false
      }))
    }

    dispatch(authActions.setInfo({
      checkingForToken: true
    }))

    if (!token) {
      dispatch(authActions.updateAuth({
        isLoggedIn: false,
        user: null,
        checkingForToken: false
      }))
      return
    }

    const isExpired = isTokenExpired(token)

    if (isExpired) {
      dispatch(authActions.setInfo({
        isLoggedIn: false,
        user: null,
        checkingForToken: false
      }))
    } else {
      const user = await decodeToken(token)
      dispatch(authActions.updateAuth({
        isLoggedIn: true,
        user,
        checkingForToken: false
      }))
    }
  }

  const checkToken = async () => {
    // Setting checking for token as true
    dispatch(authActions.setInfo({
      checkingForToken: true
    }))
    const token = await getFreshToken()
    const isExpired = isTokenExpired(token)

    if (isExpired) {
      dispatch(authActions.setInfo({
        isLoggedIn: false,
        user: null,
        checkingForToken: false
      }))
    } else {
      dispatch(authActions.setInfo({
        checkingForToken: false
      }))
    }
  }

  /**
   * Check for expiry for every 2 mins
   * This 2 mins is configurable in config.ts
   */
  const checkForTokenExpiry = () => {
    setInterval(() => {
      checkToken()
    }, Config.TOKEN_CHECKER_INTERVAL)
  }

  React.useEffect(() => {
    // Get if the token is available and set the auth store
    getToken()
    // initiate check for token expiry for every n mins
    // which is configured in config.ts
    checkForTokenExpiry()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    dispatch(errorActions.setInfo({
      showError: false
    }))
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RoutesWrapper />
      <Footer />
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={error.showError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {error.showError ? (
          <Alert elevation={6} variant="filled" severity="error">
            {error.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </ThemeProvider>
  )
}

export default App
