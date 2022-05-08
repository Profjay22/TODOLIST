

    var form = document.getElementById("new-task-form");
    form.addEventListener("submit", function(e){
       e.preventDefault();
       var toDo = document.getElementById("input-new-task").value;
    if(toDo.length < 1){
        alert("Please Add Task!!");
        return;
    }
      
       var supercontainer = document.createElement("div");
       supercontainer.setAttribute("class", "task");
       let subContainer1 = document.createElement("div");
       subContainer1.setAttribute("class","content");
       let sc = document.createElement("input");
       sc.setAttribute("class", "text");
       sc.type = "text";
       sc.value=toDo;
       sc.setAttribute("readonly", "readonly");
       subContainer1.appendChild(sc);
       supercontainer.appendChild(subContainer1);
       let action = document.createElement("div");
       action.setAttribute("class","action");
       let editButton = document.createElement("button");
       editButton.setAttribute("class","edit");
       editButton.innerHTML = "Edit";
       action.appendChild(editButton);
       let deleteButton = document.createElement("button");
       deleteButton.setAttribute("class", "delete");
       deleteButton.innerHTML = "Delete";
       action.appendChild(deleteButton);
       supercontainer.appendChild(action);
       let addItem = document.getElementById("tasks");
       addItem.appendChild(supercontainer);
       toDo.value = ' ';
    
       editButton.addEventListener("click", function(e){
           if(editButton.innerText.toLowerCase() == "edit"){
            sc.removeAttribute("readonly");
            editButton.focus();
            editButton.innerText = "save";
           }
           else{
               sc.setAttribute("readonly","readonly");
               editButton.innerText = "edit";
           }

           

       })

 
 

})
var items = document.getElementById("tasks");
items.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Do you want to delete?")){
        let parentele = e.target.parentElement.parentElement;
        items.removeChild(parentele);
    }

    }
})

let search = document.getElementById("filter");
search.addEventListener("keyup", function(e){
    let ItemList = document.getElementsByClassName("task");
    //console.log(ItemList);
    let ArrayList = Array.from(ItemList);
    
    ArrayList.forEach(function(ArrayList){
        console.log(ArrayList);
     let textValues =  ArrayList.firstElementChild.firstElementChild.value;
     //console.log(textValues);
       
       if (textValues.toLowerCase().indexOf(search.value.toLowerCase()) != -1){
           ArrayList.style.display = "flex";
       }
       else{
           ArrayList.style.display = "none";
       }
     })
})







//  let buttons = document.getElementsByClassName("edit")[0];

//  buttons.addEventListener("click", function(e){
   
//      if(buttons.innerText.toLowerCase()== "edit"){
         
//          buttons.innerText = "save";
//          let texts = document.getElementsByClassName("text")[0];
//          texts.removeAttribute("readonly");
//          texts.focus();
//      }
//      else{
//          buttons.innerText= "Edit";
//          let texts = document.getElementsByClassName("text")[0];
//          texts.setAttribute("readonly", "readonly");
//      }
//  })

