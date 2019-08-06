module.exports = {
  ignore: [
    '/node_modules/'
  ],
  presets: [
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: 'entry',
      targets: {
        browsers: [
          '>0.25%',
          'not ie 11',
          'not op_mini all'
        ]
      }
    }],
    '@babel/preset-react'
  ],
  plugins: ['babel-plugin-syntax-dynamic-import'],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    },

    dev: {
      plugins: ['react-hot-loader/babel']
    },

    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
};
