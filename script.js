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
        oneTimeTaskDiv.textContent = text.value;
    
    var clickCount = 0;
    oneTimeTaskDiv.addEventListener('click', function(event){
        clickCount++;
        if(clickCount % 2 !== 0) {
            event.target.style.backgroundColor = 'blue';
        }else{
            event.target.style.backgroundColor = 'white';
        }
    });
    
    oneTimeTaskDiv.addEventListener('dblclick', function(event){
        oneTimeTaskContainer.removeChild(oneTimeTaskDiv);
    });
    oneTimeTaskContainer.appendChild(oneTimeTaskDiv);
}