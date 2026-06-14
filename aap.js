var getList=document.getElementById('list')
var getInp =document.getElementById('todo')

function addTodo(){
    if(getInp.value==" "){
        alert("enter any character ")
    }
else{
getList.innerHTML+=`<li>${getInp.value} <button onclick="updatedValue(this)"> Edit </button> <button onclick="deletedValue(this)"> Delete</button> </li>`
getInp.value =" "
}
}

function updatedValue(e){
    var updatedValue=prompt("Enter updated value" ,e.parentNode.firstChild.textContent )
 e.parentNode.firstChild.textContent=updatedValue
}

function deletedValue(e){
e.parentNode.remove()
}
function deleteAll(){
 getList.innerHTML=" "
}