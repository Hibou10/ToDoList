// Create Variable for the element in HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === '') {
        alert("You have to write something!");
    } 
    else {
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
    }
    // clear input field after adding text
    inputBox.value = "";
    saveData();
} 
    //
    listContainer.addEventListener("click", function(e){
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } 
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    // store changes when refreshing the page
    // if not stored, dakchi li dkhelna f input field w li t marka ghadi yemchi
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

    // display this data when we refresh or open browser again
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();