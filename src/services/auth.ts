import { configureConnector } from '@topcoder-platform/tc-auth-lib'
import { Config } from '../config'

/**
 * Configures OAuth connector for topcoder SSO login
 */
export const configureOAuthConnector = () => {
  configureConnector({
    connectorUrl: Config.SSO_URL,
    frameId: 'tc-accounts-iframe'
  })
}
