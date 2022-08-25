const ftoc = function(degreeF) {
  const degreeC = 5 * (degreeF - 32) / 9;
  return (Number.isInteger(degreeC))? degreeC: Number(degreeC.toFixed(1));
};

const ctof = function(degreeC) {
  return Math.round(((9/5 * degreeC) + 32) * 10) / 10;  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
