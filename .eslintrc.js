module.exports = {
  env: {
    "browser": true
  },
  extends: "airbnb-base",
  rules: {
    "no-plusplus": "off",
    "func-names": "off",
    "no-param-reassign": ["error", { props: false }],
    "quotes": ["error", "double"]
  }
};
