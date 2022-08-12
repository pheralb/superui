const withTM = require("next-transpile-modules")(["superui"]);

module.exports = withTM({
  reactStrictMode: true,
});
