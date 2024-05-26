document.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.querySelector('.add-button');
    const taskInput = document.querySelector('.input-button');
    const taskList = document.querySelector('ul');

    addButton.addEventListener('click', () =>{
        if(taskList.children.length <4){
        const taskText = taskInput.value.trim();
        if (taskText !== ''){
            const newTask = document.createElement('li');
            newTask.innerHTML =`${taskText}<i class="fas fa-trash delete-icon"></i>`;
            taskList.appendChild(newTask);
            taskInput.value = '';
            addDeleteEvent(newTask.querySelector('.delete-icon'));
        }
    
    }else{
        alert('your can only add up to 4 task.');
    }

    });
    function addDeleteEvent(deleteIcon){
        deleteIcon.addEventListener('click', (e) =>{
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        });
    }
    document.querySelectorAll('.delete-icon').forEach(deleteIcon =>{
        addDeleteEvent(deleteIcon);
    });
});