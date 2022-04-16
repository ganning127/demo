const fetch = require("node-fetch");
// npm install node-fetch@2

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  let name1 = req.query.name1;
  let name2 = req.query.name2;
  let name3 = req.query.name3;
  let name4 = req.query.name4;

  const firstCat = await getCatPic(name1);
  const secondCat = await getCatPic(name2);
  const thirdCat = await getCatPic(name3);
  const fourthCat = await getCatPic(name4);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      cat1: firstCat,
      cat2: secondCat,
      cat3: thirdCat,
      cat4: fourthCat,
    },
  };
};

async function getCatPic(name) {
  const resp = await fetch("https://cataas.com/cat/cute/says/" + name, {
    method: "GET",
  });

  const data = await resp.arrayBuffer();

  const dataInBase64 = Buffer.from(data).toString("base64");

  return dataInBase64;
}

function getNames() {
  const listOfNames = [
    "Shreya",
    "Emily",
    "Fifi",
    "Beau",
    "Evelyn",
    "Julia",
    "Daniel",
    "Fardeen",
  ];
  const randomValue = Math.floor(listOfNames.length * Math.random());
  const resultName = listOfNames[randomValue];
  return resultName;
}
