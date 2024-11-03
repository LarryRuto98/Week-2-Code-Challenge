#WEEK 2 CODE CHALLENGE
<p>To begin, we start by creating a html structure that will display our mini website and a css file that will style our diplayed items i.e the buttons and strike through effect when an item is marked as purchased<p>
<p> The javascript file now tells us how the browser comes about to perfom the actions instructed<p>
<p>we first start by creating an array that will store the elements added onto it.. this is done by declaring a variable and assigning the array to it

```
const shoppingListArr = []
```
After an array is created we now define a function that will add items to the shopping list `function addItems()`
within the function we declare variables that will be assigned to the values fed in the `ItemInput` which will be accessed using the DOM method `document.getElementById("itemInput")`

Thereafter when the html attribute is accessed in order to display what is fed we assign in to  another variable then use ` NewItemInput.value.trim()` in which `.value`returns the value of the text field and `.trim()` Clears trailing whitespaces

next step is to now deploy the else if statement to check if the input field is empty and whatever was fed 

```
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
```
In order to add new items to the list we need to access the html attribute by id which will list them under the `<ul></ul>` tag. We use `document.getElementById("shoppingList")`. Another variable is created which will create a listed element which will be stored under that variable using the `document.createElement("li")` function. For it to return the  text content of the node created we deploy `itemList.textcontent` which sets the return text content.

Followed is creating a markPurchsed button using the dom function `document.createElement("button")` also set the text content using the previous method.For it to be interactive we attach an event listener to the button which will anticipate for a click 

```
addEventListener('click', function())
```
Through the use of call back function we add another function `itemList.classList.toggle('purchased')` whereby `.classList` gives access to the token list and `.toggle` allows us to change an element apperance allowing us to use the strikethrough effect for purchased items. Next is to add the `markpurchased` node to its parent node `itemList` after its added we add it to another parent node before it which is `shoppingList`

```
 itemList.appendChild(markPurchasedButton)
 shoppingList.appendChild(itemList);
 ```
 Next is to push the created elements to the array using `shoppingList.appendChild(itemList);`and reseting the input field to be empty by assigning the variable an empty string using this method `NewItemInput.value = '';`

 we finally create a clear function that erases items added to the list
 ```
 function clearList(){
    const shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = '';
    shoppingListArr.length = 0
    console.log(shoppingListArr)
```
in order to do it we use the `.innerHTML` to clear all the content inside `shoppingList` element by assigning an empty string just like before. `
shoppingListArr.length = 0` clears the array ensuring no items from previous session exist.

the final move is now to attach event listeners to the add button and clear button by accessing their respective elements as follows
```
document.getElementById("addButton").addEventListener('click',addItems);
document.getElementById("clearButton").addEventListener('click', clearList);
```