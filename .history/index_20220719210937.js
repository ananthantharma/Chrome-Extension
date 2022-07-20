let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const deleteIcon=document.getElementById("delete-icon")
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

for(var i=0; i<li.length; i++)
{
    li[i].addEventListener("click", function(event)
    {
        event.target.classList.toggle("done");
    });
    addDelButton(li[i]);
}

function render() {
    let listItems = ""
    var li = document.createElement("li");
    
    
    li.appendChild(document.createTextNode(inputEl.value));
    addDelButton(li);
    ul.appendChild(li);
    
    
}


function addDelButton(parent) {
    var buttonElem = parent.appendChild(document.createElement("button"));
    buttonElem.innerHTML = "Delete";
    buttonElem.onclick = function() {
        this.parentElement.remove();
    }}




/* function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>                
            </li>
        `
    }
    ulEl.innerHTML = listItems
} */
//<button id='delete-icon' onclick='${removeElement(leads[i])}'>delete</button>

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    
})

/* function removeElement(element){
    myLeads.splice(element)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    
} */



function addli() {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.className = "delete";
    btn.innerHTML = "delete";
    btn.addEventListener("click", function(e) {
      e.target.parentNode.remove();
    });
    li.addEventListener("click", strikeout);
    li.innerHTML = input.value + " ";
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";
  }