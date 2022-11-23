const oneTimeTaskContainer = document.querySelector('#oneTimeTasks');


function addOneTimeTask() {
    
    if (document.getElementById("oneTask_Text").value == '') {
        alert("Add a task name first");
    }else{
        submitOneTimeTask();
    }
}

function submitOneTimeTask() {
    const oneTimeTaskDiv = document.createElement('div');
    oneTimeTaskDiv.classList.add('oneTimeTaskDiv');
    var text = document.getElementById('oneTask_Text');
    oneTimeTaskContainer.appendChild(oneTimeTaskDiv);
}