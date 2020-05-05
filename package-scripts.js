const { series, concurrent, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npm start",
    flow: "flow",
    local:
      "cross-env NODE_ENV=local webpack-dev-server --open --mode development",
    test: "npx jest",
    functest: "npx run-p -r start cytest",
    flow: "npx flow check",
    cytest: "npx cypress run",
    deploy: series(rimraf("./public"), "webpack --mode production"),
  },
};
