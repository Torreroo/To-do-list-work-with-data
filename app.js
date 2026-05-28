const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");
const listItems = document.querySelectorAll("li")
let editingItem = null;
//delete functionality 
for (let listItem of listItems) {

    let deleteButton = listItem.firstElementChild

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
}




//create functionality 
addBtn.addEventListener("click", () => {
    let inputValue = input.value //bread

    //delete btn logic
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'X'

    //edit btn logic 
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    //list item element
    let newItem = document.createElement("li");

    if (inputValue.length > 0) {


        newItem.textContent = inputValue;
        newItem.append(deleteButton)
        newItem.append(editBtn);
        //logic to edit
        editBtn.addEventListener("click", () => {
            input.value = inputValue;
            addBtn.textContent = 'Save'
            editingItem = newItem;
        });

        //logic to delete item
        deleteButton.addEventListener("click", () => {
            newItem.remove();
        })



    } else {
        alert("Please, type the text");
    }


    if (addBtn.textContent == 'Add') {
        list.append(newItem)
        input.value = ''

    } else {
  //click on save
        editingItem.firstChild.textContent = inputValue;
    
        addBtn.textContent = 'Add'
        input.value = ''
        editingItem = null;
    }
});