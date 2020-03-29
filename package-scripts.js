const { series, concurrent } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npm start",
    flow: "flow",
    local:
      "cross-env NODE_ENV=local webpack-dev-server --open --mode development",
    codeintegrity: series(
      "npx nps flow",
      "npx nps test",
      "npx run-p -r start cytest"
    ),
    test: "npx jest",
    flow: "npx flow check",
    cytest: "npx cypress run"
  }
};
