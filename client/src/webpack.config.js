const OptimizedImagesPlugin = require('react-optimized-images/plugin');

module.exports = {
  // ... webpack config
  plugins: [
    // ... other plugins
    new OptimizedImagesPlugin({ ...options }),
  ],
};