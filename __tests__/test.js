const tests = require('../index');

describe('blah', () => {
  for (let test of tests) {
    it(test.name, async () => {
      let result = await test.run();

      expect(result).toEqual(true);
    });
  }
});
