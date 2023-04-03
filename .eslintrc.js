module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/react-in-jsx-scope': 'off',
  },
};
