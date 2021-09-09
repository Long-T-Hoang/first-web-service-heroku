const randomNumberJSON = (max = 1) => {
  let maxNum = Number(max);
  maxNum = !maxNum ? 1 : maxNum;
  maxNum = maxNum < 1 ? 1 : maxNum;

  const number = Math.random() * maxNum;

  const responseObj = {
    timestamp: new Date(),
    number,
  };

  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
