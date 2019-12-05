module.exports = {
  ignore: ['/node_modules/'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['babel-plugin-syntax-dynamic-import'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    },

    dev: {
      plugins: ['react-hot-loader/babel']
    },

    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
};
