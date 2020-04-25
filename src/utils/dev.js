export const includeHotReloadCapabilities = component => {
  if (process.env.NODE_ENV !== 'development') {
    return component;
  }

  const hot = require('react-hot-loader').hot;

  return hot(module)(component);
};

export default { includeHotReloadCapabilities };
