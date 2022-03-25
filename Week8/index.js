let apiURL = "https://api.airtable.com/v0/appPX3PCTZyxABB0Z/tblM1BxwvimHqac9E?api_key=keyh4dqwBcxr4tesR";

//this is a global variable to store all the data from the database
let apiData;



//this is where you 'call' your data

//asynchronous
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}

async function main(){

    const image_divs = document.getElementById("image_div");

    apiData = await getData(apiURL);
    console.log(apiData);

    for(let i = 0; i < apiData.records.length; i++){
        let name = apiData.records[i].fields.Cartoon;
        console.log(name);
        let heading = document.createElement("h2");
        heading.innerHTML = name;
        document.body.appendChild(heading);

        let image = document.createElement("img");
        image.src = apiData.records[i].fields.Image[0].url;
        image.className = "image" + i;
       document.body.appendChild(image);
    }
    


}

main();


// create paragraph/headings for all the cartoon names

// records
//     0, 1, 2... 8
//         createdTime, fields, id
//                         Cartoon, Date, Description, Image
//                                                     0
//                                                         filename, height, id, size, thumbnails, type, url, width

