import './index.css';
// import logo from './logo.png';


let container = document.getElementById('container');
let div1 = document.createElement('div');
let tasks = document.createElement('div');
let newTask = document.createElement('div');
let div2 = document.createElement('div');

let image = document.createElement('img');
image.src = 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif';
image.setAttribute('id', 'logo');
div1.append(image);

div2.setAttribute('id', 'inputDiv');

let taskbar = document.createElement('input');
taskbar.placeholder = 'Enter your task...';
taskbar.setAttribute('id', 'inputbox');

let addbutton = document.createElement('button');
addbutton.innerText='Add';
addbutton.setAttribute('id', 'button');

tasks.setAttribute('id', 'tasks');
tasks.append(taskbar,addbutton);

newTask.setAttribute('id', 'newtasks')

div2.append(tasks,newTask);

container.append(div1,div2);

// container.append(div1);



document.querySelector('#button').onclick = function(){
    if(document.querySelector('#tasks input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#newtasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#tasks input').value}
                </span>
                <button class="delete">Delete</button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}