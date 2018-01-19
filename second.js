let sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

module.exports = {
  name: 'works with async',
  run: async () => {
    await sleep();

    return true;
  },
};
