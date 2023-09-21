// we create a console.log to see if the js script is added correctly to HTML file
console.log("Jeg er i kommunetable")

// We create a const as our API link:
const urlKommune = "http://localhost:8080/kommuner"

// We connect the interactive bojects in from HTML file to our js file.
const btnCreateKommuneTable = document.getElementById("btnGetKommuner")
const tblKommuner = document.getElementById("tblkommuner")

// We add event listeners on our connected objects from html
btnCreateKommuneTable.addEventListener('click', actionGetKommuner)

//We create a function to fetch data from out url
function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json())
}

// We create function to fill data in our table
// We also make sure that the fetched data from the API has the correct attributes
function createTable(kommune) {
    // We create a let and set it to 0. This let will increase by one, each time the function has been ran with a kommune object
    let cellCount = 0;

    // We create a let that insert a row into the table with row number being our let rowCount
    let row = tblKommuner.insertRow()

    // We create a let to control the cell number
    // We set it to be equal to our cellCount
    //HINT: each cell is unique when inserting different values
    let cell = row.insertCell(cellCount++)

    //We write the attribute value we wanna assign to the cell
    cell.innerHTML = kommune.kode

    //We repeat these two steps for the last attributes
    row.insertCell(cellCount++)
    cell.innerHTML = kommune.navn

    row.insertCell(cellCount++)
    cell.innerHTML = kommune.href
}



// We create a let object of the object we are working with
let kommuner

// We create a function that calls our fetchAnyUrl() and does a forEach with each object in createTable()
async function fetchKommuner() {
    //We just the created object and call fetchAnyUrl
    kommuner = await fetchAnyUrl(urlKommune)

    // We takes the filled object and calls cerateTable
    // HINT: It needs to itterate
    kommuner.forEach(createTable)
}

// We create a function that gets called when btn is pressed
function actionGetKommuner() {
    fetchKommuner()
}


