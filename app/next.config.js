const withTM = require("next-transpile-modules")(["@superui/styles"]);

module.exports = withTM({
  reactStrictMode: true,
});
