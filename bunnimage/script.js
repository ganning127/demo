const bunnForm = document.getElementById("bunnForm");

bunnForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  var myform = document.getElementById("bunnForm");
  var payload = new FormData(myform);
  console.log(payload);
  var username = document.getElementById("username").value;
  const output = document.getElementById("output");

  if (username != "") {
    output.textContent = "Thanks!";

    console.log("Posting your image...");
    const resp = await fetch(
      "https://bitproject2022.azurewebsites.net/api/bunnimage-upload?code=Igrs1ytg19dqLE/85038CsY9P3ahJB77YRaOMfNez4GX4jids69znw==",
      {
        method: "POST",
        headers: {
          codename: username,
        },
        body: payload,
      }
    );

    var data = await resp.text();
    console.log(data);
    output.textContent = "Your image has been stored successfully!";
  } else {
    alert("No name error.");
  }
});

let downloadButton = document.getElementById("button1");

downloadButton.addEventListener("click", async function (event) {
  console.log("clicked button");
  var username = document.getElementById("downloadusername").value;
  console.log("attempting to get your image...");

  const url =
    "https://bitproject2022.azurewebsites.net/api/bunnimage-download?code=9RJgaEjrncg13hdLKmWuvSKIi0FCsihtrioYkdes5cy2CakomcZg6A==";

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      username: username,
    },
  });

  const data = await resp.json();

  console.log("image has been received");

  console.log(data);

  window.open(data.downloadUri, "_self");
});
