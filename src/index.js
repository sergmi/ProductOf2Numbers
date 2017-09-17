module.exports = function multiply(first, second) {
  return new BigNumber(first).mul(second).toString().match(/\d.\d*/).toString().replace('.','');
}
