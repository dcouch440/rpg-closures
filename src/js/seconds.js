const seconds = (seconds) => {
  const ms = seconds * 1000;
  return new Promise(resolve => setTimeout(resolve, ms));
};
module.exports = seconds;
