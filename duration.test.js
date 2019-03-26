var duration = require("./duration");

describe("duration", () => {
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;

  it("test", () => {
    const result = duration(865000100);
    expect(
      result.day * day +
        result.hour * hour +
        result.min * min +
        result.sec * sec +
        result.ms
    ).toBe(865000100);
  });
});
