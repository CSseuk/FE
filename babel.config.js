// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@src': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@stores': './src/stores',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@contexts': './src/contexts',
            '@constants': './src/constants',
            '@design-system':
              './src/storybook/stories/design-system/components',
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      ],
    ],
  };
};
