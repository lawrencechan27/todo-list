// var to hold DOM elements
//const listItem = `
//<div class="listItem" id="1"><div class="listText">This is a to-do item</div><div class="deleteBtn">X</div></div>
//`;

//let listDiv = document.querySelector('.listContainer')
//listDiv.innerHTML += listItem;


// typingArea
// etc

// define global array that holds list of items
var listArray = [];

// function to add item
const submitField = function(){
    // create a new object and place inputField into the text property
    let inputItem = {
        "id": 1,
        "text": document.querySelector('.inputField').value
    }
    // add object to listArray
    listArray.push(inputItem);
    // clear typeArea
    document.querySelector('.inputField').value = "";
    // run update function
    updateList();
    // for testing purposes
    console.table(listArray)
}

// function to remove item
// [x] button on div, on click:
// find parent ID
// loop through listArray and look for matching ID
// remove item from array
// run populate function

// function to update the list
const updateList = function(){
    // assign div.listContainer as var for easy access
    let listContainer = document.querySelector('.listContainer')
    // clear out the div
    listContainer.innerHTML = "";
    // loop through all items in listArray
    //for (i=0;i<listArray.length;i++){
    for (item of listArray){
        // append HTML to div.listContanier
        let listItem = `
        <div class="listItem" id="1">
        <div class="listText">${item.text}</div>
        <div class="deleteBtn">X</div></div>
        `;
        listContainer.innerHTML += listItem;
    }
}

// function to populate/update the list
// loop through listArray
// for each item in Array, append listItem to a div, assign ID to div ID and string to contents