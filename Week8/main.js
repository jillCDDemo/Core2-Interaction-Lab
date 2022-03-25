
let data;
let apiURL = 'https://api.airtable.com/v0/appPX3PCTZyxABB0Z/tblM1BxwvimHqac9E?api_key=keyh4dqwBcxr4tesR';

// fetch('://api.airtable.com/v0/appPX3PCTZyxABB0Z/tblM1BxwvimHqac9E?api_key=keyh4dqwBcxr4tesR')
//   .then(response => response.json())
//   .then(data => console.log(data.records));

async function getData(url){
  let response = await fetch(url);
  let jsonData = await response.json()
  return jsonData;
}

main();

// async function makeImages(){
//   for(let i = 0; i<data.records.length; i++){
//     let image = document.createElement("img");
//     image.src = data.records[i].fields.Image[0].url;
//     document.body.appendChild(image);
//   }
// }

async function main(){
  data = await getData(apiURL);
  console.log(data);

  // makeImages();
}