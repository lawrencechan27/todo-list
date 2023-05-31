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

// define global ID counter var to assign to each item
var currentId = 0;

// function to add item
const submitField = function(){
    // create a new object and place inputField into the text property
    let inputItem = {
        "id": currentId,
        "text": document.querySelector('.inputField').value
    }
    // increment currentId for the next entry
    currentId++;
    // add object to listArray
    listArray.push(inputItem);
    // clear typeArea
    document.querySelector('.inputField').value = "";
    // run update function
    updateList();
}

// function to remove item
const deleteItem = function(elem){
    // assign ID of the clicked button's parent div to a var
    let deletionId = elem.parentNode.id;
    // use filter to remove object that matches deletionId
    listArray = listArray.filter(item => item.id != deletionId);
    // run update function
    updateList();
}

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
        <div class="listItem" id="${item.id}">
            <div class="listText">${item.text}</div>
            <div class="deleteBtn" onclick="deleteItem(this)">X</div>
        </div>
        `;
        listContainer.innerHTML += listItem;
    }
}