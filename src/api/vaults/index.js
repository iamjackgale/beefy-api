const getMultichainVaults = require('../stats/getMultichainVaults');

async function multichainVaults(ctx) {
  try {
    const multichainVaults = await getMultichainVaults();
    ctx.status = 200;
    ctx.body = [...multichainVaults.data];
    ctx.set('Last-Modified', multichainVaults.dataRefreshTimestamp);
  } catch (err) {
    console.error(err);
    ctx.status = 500;
  }
}

module.exports = {
  multichainVaults,
};
