const withPWA = require('next-pwa')
const withSourceMaps = require('@zeit/next-source-maps')()
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const DEV_MODE = process.env.NODE_ENV !== 'production'
const SENTRY_DSN = process.env.SENTRY_DSN

const exportPathMap = async () => {
  return {
    // PUBLILC
    '/': {page: '/'},
  }
}

const webpack = (config, options) => {
  if (!options.isServer) {
    config.resolve.alias['@sentry/node'] = '@sentry/browser'
  }
  if (SENTRY_DSN && !DEV_MODE) {
    config.plugins.push(
      new SentryWebpackPlugin({
        include: '.next',
        ignore: ['node_modules'],
        urlPrefix: '~/_next',
        release: COMMIT_SHA,
      })
    )
  }

  config.module.rules.push({
    test: /\.svg$/,
    use: '@svgr/webpack',
  })
  return config
}

module.exports = withPWA(
  withSourceMaps({
    exportPathMap,
    webpack,

    trailingSlash: true,
    pwa: {
      disable: DEV_MODE,
      dest: 'public',
    },
  })
)
