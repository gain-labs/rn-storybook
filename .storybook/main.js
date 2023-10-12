module.exports = {
  stories: [
    './stories/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/components/*.stories.js',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};
