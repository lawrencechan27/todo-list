// define global array that holds list of items
var listArray = [];

// function to add item
const submitField = function(){
    // create a new object and place inputField into the text property
    let inputItem = {
        "id": Date.now(),
        "text": document.querySelector('.inputField').value
    }
    // add object to listArray
    listArray.push(inputItem);
    // clear typeArea
    document.querySelector('.inputField').value = "";
    // run update function
    updateList();
}

// function to edit item
const editItem = function(elem){
    // hide the edit button
    elem.style.display = 'none';
    // unhide the save button by changing display:none to display:block
    let saveBtn = elem.nextElementSibling;
    saveBtn.style.display = 'block';
    // apply editable attribute to the text field, and make it green
    let textField = elem.previousElementSibling;
    textField.contentEditable = true;
    textField.classList.add('beingEdited');
}

// function to save edit
const saveItem = function(elem){
    // assign textField as first child of parent div
    let textField = elem.parentNode.children[0];
    // remove editable attribute and remove being edited class
    textField.contentEditable = false;
    textField.classList.remove('beingEdited');
    // target the relevant object by matching the ID
    let thisId = elem.parentNode.id;
    let targetItem = listArray.find(obj => obj.id == thisId)
    // change the target objects text to whatever was in editable field
    let newText = elem.parentNode.children[0].innerHTML;
    targetItem.text = newText;
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
            <div class="editBtn" onclick="editItem(this)">✎</div>
            <div class="saveBtn" onclick="saveItem(this)" style="display:none;">💾</div>
            <div class="deleteBtn" onclick="deleteItem(this)">X</div>
        </div>
        `;
        listContainer.innerHTML += listItem;
    }
    console.table(listArray);
}

// sort by newest first
const sortNew = function(){
    listArray.sort(
        (a,b) => a.id > b.id ? -1 : 1
    )
    updateList();
}

// sort by oldest first
const sortOld = function(){
    listArray.sort(
        (a,b) => a.id > b.id ? 1 : -1
    )
    updateList();
}

// sort by text first
const sortAlpha = function(){
    listArray.sort(
        (a,b) => a.text > b.text ? 1 : -1
    )
    updateList();
}