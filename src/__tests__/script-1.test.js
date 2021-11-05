const { log } = require("../script");

describe("script 1", () => {
  it("logs error", () => {
    log("hello 1");
  });

  it("logs error - mock", () => {
    console.error = jest.fn();
    log("hello 2");
  });

  it("logs error 2 ", () => {
    log("hello 3");
  });
});
