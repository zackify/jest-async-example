const tests = [];

require('fs')
  .readdirSync(require('path').join(__dirname, '../custom'))
  .forEach(file => tests.push(require(`../custom/${file}`)));

describe('blah', () => {
  for (let test of tests) {
    it(test.name, async () => {
      let result = await test.run();

      expect(result).toEqual(true);
    });
  }
});
