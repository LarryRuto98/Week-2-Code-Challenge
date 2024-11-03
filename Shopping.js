const shoppingListArr = []
function addItems(){
    const NewItemInput = document.getElementById("itemInput");
    const NewitemText = NewItemInput.value.trim();

if(NewitemText !==  ""){
    const shoppingList = document.getElementById("shoppingList")
    const itemList = document.createElement("li");
    itemList.textContent = NewitemText;

    const markPurchasedButton = document.createElement("button")
    markPurchasedButton.textContent = "mark Purchased";
    markPurchasedButton.style.marginLeft = "10px";

    markPurchasedButton.addEventListener('click', function() {
        itemList.classList.toggle('purchased');
    })

    itemList.appendChild(markPurchasedButton)
    shoppingList.appendChild(itemList);
    shoppingListArr.push(NewitemText);
    console.log(shoppingListArr);

    NewItemInput.value = '';
}

} 
function clearList(){
    const shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = '';
    shoppingListArr.length = 0
    console.log(shoppingListArr)
}
document.getElementById("addButton").addEventListener('click',addItems);
document.getElementById("clearButton").addEventListener('click', clearList);