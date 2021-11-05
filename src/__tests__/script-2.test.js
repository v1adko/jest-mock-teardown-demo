const { log } = require("../script");

describe("script 2", () => {
  it("logs error", () => {
    log("hello 1");
  });

  it("logs error - mock", () => {
    log("hello 2");
  });

  it("logs error 2 ", () => {
    log("hello 3");
  });
});
