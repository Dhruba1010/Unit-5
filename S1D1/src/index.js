import './index.css';
// import logo from './logo';

// let logo = document.querySelector('#logo');
// let image = document.createElement('img');
// image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png';
// logo.append(image);

let container = document.querySelector('#container');
let lImg = container.createElement('div');
let rImg = lImg.createElement('img');
rImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png';
container.append(lImg);
// let tasks = container.createElement('div');

// let newtasks = container.createElement('div');
document.querySelector('#add').onclick = function(){
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