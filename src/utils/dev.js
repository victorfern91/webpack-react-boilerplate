export const includeHotReloadCapabilities = component => {
  if (process.env.NODE_ENV === 'development') {
    const { hot } = require('react-hot-loader');

    return hot(module)(component);
  }

  return component;
};

export default { includeHotReloadCapabilities };
