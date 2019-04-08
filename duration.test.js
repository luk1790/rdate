var duration = require("./duration");

describe("duration", () => {
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;

  it("check parsing miliseconds", () => {
    const variables = [869230100, 899230500, 877230700];
    variables.forEach(value => {
      const result = duration(value);
      expect(
        result.day * day +
          result.hour * hour +
          result.min * min +
          result.sec * sec +
          result.ms
      ).toBe(value);
    });
  });
  it("check parsing miliseconds from date", () => {
    // const variables = [869230100, 899230500, 877230700];
    // variables.forEach(value => {
      var dateFirst =  new Date('1990/01/17 17:01:10');
      console.log(dateFirst);
      const result = duration(10000003300, dateFirst);

      console.log(result);
      // expect(
      //   result.day * day +
      //     result.hour * hour +
      //     result.min * min +
      //     result.sec * sec +
      //     result.ms
      // ).toBe(value);
    });
  // });
});
