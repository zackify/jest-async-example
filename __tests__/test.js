const tests = [];

//grab this array from the database, with process.env.url
let testsToRun = ['second.js'];

require('fs')
  .readdirSync(require('path').join(__dirname, '../custom'))
  .forEach(file => {
    //skip loading a test if its not meant for this url
    if (!testsToRun.includes(file)) return;

    tests.push(require(`../custom/${file}`));
  });

describe('blah', () => {
  for (let test of tests) {
    it(test.name, async () => {
      let result = await test.run();
      expect(result).toEqual(true);
    });
  }
});
