const input = document.getElementById("item-input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("list");
const listItems = document.querySelectorAll("li")

//delete functionality 
for (let listItem of listItems) {

    let deleteButton = listItem.firstElementChild

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });
}




//create functionality 
btn.addEventListener("click", () => {
let inputValue = input.value //bread
    if (inputValue.length > 0) {
        //delete btn logic
        let deleteButton = document.createElement("button");
        deleteButton.textContent = 'X'

        //edit btn logic 
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";


        let newItem = document.createElement("li");
        newItem.textContent = inputValue;
        newItem.append(deleteButton)
        newItem.append(editBtn);
        editBtn.addEventListener("click", () => {
            input.value = inputValue;
        });
        //logic to delete item
        deleteButton.addEventListener("click", () => {
        newItem.remove();
        })
 
        list.append(newItem)
        input.value = ''
        
    } else {
        alert("Please, type the text");
    }

});