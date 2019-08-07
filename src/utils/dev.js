export const includeHotReloadCapabilities = Component => {
  let hot = null;

  if (process.env.NODE_ENV  === 'development') {
    hot = require('react-hot-loader').hot;
  }

  return process.env.NODE_ENV  === 'development' ? hot(module)(Component) : Component
};
