const fetch = require("node-fetch");
// npm install node-fetch@2

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  // www.example.com?name1=dave&name2=hello
  // alternative: change this into an array
  const name1 = req.query.name1;
  const name2 = req.query.name2;
  const name3 = req.query.name3;
  const name4 = req.query.name4;

  context.log("Got the names...");

  const cat1 = await getCatPic(name1);
  const cat2 = await getCatPic(name2);
  const cat3 = await getCatPic(name3);
  const cat4 = await getCatPic(name4);

  context.log("Got the images...");

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      cat1: cat1,
      cat2: cat2,
      cat3: cat3,
      cat4: cat4,
    },
  };
};

async function getCatPic(name) {
  const resp = await fetch("https://cataas.com/cat/says/" + name, {
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
