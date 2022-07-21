let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const li=document.createElement("li")
const ananthanEl=document.getElementById("ananthan-el")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
   }

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        
        let a5=document.createElement('a')
        let list5 =document.createElement("li")
        let button5=document.createElement('button')
        
        button5.className="small-btn"
        button5.id="small-button"
        button5.innerHTML="Delete";
        button5.onclick=function(){
            list5.remove()
            let index = myLeads.indexOf(tabs[0].url);
            //if (index !== -1) {
                myLeads.splice(index, 1);
                localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            //}
        }
        a5.innerHTML=tabs[0].url
        a5.title =tabs[0].url
        a5.href=tabs[0].url


        
        ulEl.appendChild(list5)
        list5.appendChild(a5)
        list5.appendChild(button5)
        
        

        })
    })

function render(leads) {       
    for (let i = 0; i < leads.length; i++) {
        //li.appendChild(document.createTextNode(leads[i]));
        let a=document.createElement('a')
        let list =document.createElement("li")
        let button=document.createElement("button")
        button.className="small-btn"
        button.id="small-button"
        button.innerHTML="Delete";
        //*********************************************** */
        button.onclick=function(){
            list.remove()
            let index = myLeads.indexOf(leads[i]);
            //if (index !== -1) {
                myLeads.splice(index, 1);
                localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            //}
        }

        a.innerHTML=leads[i]
        a.title =leads[i]
        a.href=leads[i]

        ulEl.appendChild(list)
        list.appendChild(a)
        list.appendChild(button)
        
       

        }   
        
          }

          function removebutton(parent) {
            
                this.parentElement.remove();
            }

    deleteBtn.addEventListener("dblclick", function() {
        myLeads = []
        localStorage.clear()
        document.getElementById('ul-el').innerHTML = '';
        console.log(myLeads)
        })

        
         
       

    inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        let a1=document.createElement('a')
        let list1=document.createElement("li")
        
        let button2=document.createElement('button')
        button2.className="small-btn"
        button2.id="small-button"
        a1.innerHTML=inputEl.value
        a1.title =inputEl.value
        a1.href=inputEl.value

        button2.innerHTML="Delete"
        button2.onclick=function(){
            list1.remove()
            let index = myLeads.indexOf(inputEl.value);
            //if (index !== -1) {
                myLeads.splice(index, 1);
                localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            //}
        }


        ulEl.appendChild(list1);
        list1.appendChild(a1)
        list1.appendChild(button2)

 
        inputEl.value = ""
        

        console.log(myLeads)      
        })

       /*  function ananthanMessage(){
            alert("Ananthan thanks you for using his Chrome extension");
        } */

        let button10=document.createElement('button')
        button10.className="small-btn"
        button10.id="small-button"
        button10.innerHTML="Made by Ananthan"
        ananthan.appendChild(button10)