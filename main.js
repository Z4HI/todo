
import './style.css'

const allTasks = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items")): []
const addBtn = document.querySelector('.addBtn')
const display = document.querySelector('.rightDisplay')
const submitBtn = document.querySelector('#submitBtn')
const Task = document.querySelector('#task')
const date = document.querySelector('#date')
const displayDate = document.querySelector('.displayDate')
const description = document.querySelector('.description')
const priorities = document.querySelectorAll('input[name = "priority"]')
const Currentdate = new Date

window.onload = ()=>{
    displayCurrentDate()
    if(allTasks){
        render()
    }
}

const createProject = (taskname,date,priority,description,completed)=>{

    let task = {taskname,date,priority,description,completed}
    allTasks.push(task)
    localStorage.setItem('items',JSON.stringify(allTasks))
    render()
    return

    }

const render = ()=>{
    display.innerHTML = ""

    for( let i=0;i<allTasks.length;i++){
    let taskCard = document.createElement('div')
    taskCard.classList.add('taskCard')
    taskCard.innerHTML = 
    `
    <div class="info">
        <div id = "cardName"> Name : ${allTasks[i].taskname}</div>
        <div id = "cardDate"> Due Date : ${allTasks[i].date}</div>
        <div id = "cardPriority"> Priority: ${allTasks[i].priority}</div>
        <div id = "cardDescription"> Description : ${allTasks[i].description}</div>
    </div>
    <div class="buttons">
        <button class ="deleteCard"><i class="fa-solid fa-trash-can"></i></button>
        <button class = "editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class = "completed"><i class="fa-regular fa-circle-check"></i></button>
    </div>
    <div class ="editdescription">
    <form action="">
          <label for="edittask">Edit Task Name</label>
          <input type="text" name="edittask" id="edittask" placeholder="Edit Task Name">
          <label for="date">Edit Date</label>
          <input type="date" name="date" id="editdate"><span>x</span> <br>Edit description
          <textarea id="edittextdescription" name="description" cols="10" rows="5"></textarea>
          <button id = "saveBtn">Save</button>
          <button id = "cancelBtn">Cancel</button>
        </form>
    </div>
    `
    
    display.appendChild(taskCard)
    }
    
    borderColorFunction()
    deleteCardFunction()
    editCardFunction()
    savecardFunction()
    cancelcardFunction()
    completedFunction()
    checkcomplete()
}
 //////cancel function///////
const cancelcardFunction =()=>{

    let cancelBtn = document.querySelectorAll('#cancelBtn')
    cancelBtn.forEach((cb,i)=>{
        cb.addEventListener('click', (e)=>{
            e.preventDefault()
            cancelItem(i)
        })
    })
}
const cancelItem = (i)=>{
    document.querySelectorAll('.editdescription')[i].style.display = 'none'
}
//////////////////////////////
//////////Completed Function///////
const checkcomplete = ()=>{
    const cards = document.querySelectorAll('.taskCard')
    const completedBtns = document.querySelectorAll('.completed')

    for(let i =0;i<cards.length;i++){
        if(allTasks[i].completed == true){
            completedBtns[i].style.backgroundColor = "green"
        }else{
            completedBtns[i].style.backgroundColor = "white"
        }
    }
}
const completedFunction = ()=>{

    const completedBtns = document.querySelectorAll('.completed')

    completedBtns.forEach((cb,i)=>{

        cb.addEventListener('click',()=>{
            
            allTasks[i].completed == false ? allTasks[i].completed = true:allTasks[i].completed = false
            checkcomplete()
            localStorage.setItem("items",JSON.stringify(allTasks))
        })
        console.log(allTasks)
    })
    
}
 //////Edit function///////
const editCardFunction =()=>{

    let editCard = document.querySelectorAll('.editBtn')
    const editdescription = document.querySelectorAll('.editdescription')
    editCard.forEach((editBtn,i) =>{
        editBtn.addEventListener('click',()=>{
            editdescription[i].style.display = 'block'
            editItem(i)
        })
    })
}
const editItem =(i)=>{
    
    document.querySelectorAll('#edittask')[i].value = allTasks[i].taskname
    document.querySelectorAll('#editdate')[i].value = allTasks[i].date
    document.querySelectorAll('#edittextdescription')[i].value = allTasks[i].description

}
/////////////////////////////
 //////border color function///////
 const borderColorFunction = ()=>{
    const cards = document.querySelectorAll('.taskCard')

    for(let i =0;i<cards.length;i++){
        if(allTasks[i].priority == "high"){
            cards[i].style.border = "solid red 6px"
        }if(allTasks[i].priority == "medium"){
            cards[i].style.border = "solid blue 6px"
        }
    }
 }

 ///////// save card function ////////
const savecardFunction = ()=>{
    const saveBtn = document.querySelectorAll('#saveBtn')
    saveBtn.forEach((sb,i) =>{
        sb.addEventListener('click',(e)=>{
            e.preventDefault()
            saveItem(i)
        })
    })
}

const saveItem = (i)=>{
    allTasks[i].taskname = document.querySelectorAll('#edittask')[i].value
    allTasks[i].date = document.querySelectorAll('#editdate')[i].value
    allTasks[i].description = document.querySelectorAll('#edittextdescription')[i].value 
    localStorage.setItem('items',JSON.stringify(allTasks))
    render()
}
///////////////////////////////////
 //////Delete function///////
const deleteCardFunction =()=>{
    let delCard = document.querySelectorAll('.deleteCard')
    delCard.forEach((card,i) => {
        card.addEventListener('click',()=>{deleteItem(i)})
    })
}
const deleteItem = (i)=>{
    allTasks.splice(i,1)
    localStorage.setItem("items", JSON.stringify(allTasks))
    render()
}
/////////////////////////////
 //////input function///////
 const priorityCheck = (priorities)=>{
    let output = ''
   for( const priority of priorities){
    if(priority.checked)
        output = priority.value
   }
    return output
}
const clearInput = ()=>{

    Task.value = ''
    date.value = ''
    priorities.forEach(function(priority){
        priority.checked = false
    })
    
    }
    const displayCurrentDate = ()=>{
    
        let stringDate = Currentdate.toString().split(" ")
        displayDate.innerHTML = `${stringDate[0]}  ${stringDate[1]}  ${stringDate[2]}`
    }
///////////////////////////////
/////////////Homepage////////////
addBtn.addEventListener('click',()=>{

    document.querySelector('.addTask').classList.toggle('visible')

})

submitBtn.addEventListener('click',(e)=>{

e.preventDefault()
document.querySelector('.addTask').classList.toggle('visible')
let instanceTask = Task.value
let instanceDate = date.value
let instancePriority = priorityCheck(priorities)
let instanceDescription = description.value
let instanceCompleted = false

createProject(instanceTask,instanceDate,instancePriority,instanceDescription,instanceCompleted)
console.log(allTasks)

clearInput()

})





