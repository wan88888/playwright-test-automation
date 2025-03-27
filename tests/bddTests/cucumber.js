module.exports = {
    default: {
      require: ["tests/bddTests/world.js", "tests/bddTests/steps/*.js"],
      format: ["pretty"],
      timeout: 60000
    }
  }