module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ]
        }
      ],
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }]
    ]
  }
}
