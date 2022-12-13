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
            event.target.classList.add('oneTimeTaskDivPressed');
        }else{
            event.target.classList.add('oneTimeTaskDiv');
            event.target.classList.remove('oneTimeTaskDivPressed');
        }
    });
    
    oneTimeTaskDiv.addEventListener('dblclick', function(event){
        oneTimeTaskContainer.removeChild(oneTimeTaskDiv);
    });
    oneTimeTaskContainer.appendChild(oneTimeTaskDiv);
}

const timedTaskContainer = document.querySelector('#timedTasks');

function addTimedTask() {
    
    if (document.getElementById("timedTask_Text").value == '') {
        alert("Add a task name first");
    }else if (document.getElementById("timedTask_Hours").value == ''){
        alert("Specify the time for this task");
    }else{
        submitTimedTask();
    }
}

function submitTimedTask() {
    const timedTaskDiv = document.createElement('div');
    timedTaskDiv.classList.add('timedTaskDiv');
    timedTaskDiv.setAttribute('id', 'timedTaskDiv');
    var text = document.getElementById('timedTask_Text');
            timedTaskDiv.textContent = text.value;

    const timedTaskSubDiv = document.createElement('div');
    timedTaskSubDiv.classList.add('timedTaskSubDiv');
    timedTaskSubDiv.setAttribute('id', 'timedTaskSubDiv');


        const timedTaskOutput = document.createElement('output');
            timedTaskOutput.classList.add('bubble');
            timedTaskOutput.setAttribute('id', 'bubble');   

        const timedTaskSlider = document.createElement('input');
            timedTaskSlider.id = 'hours';
            timedTaskSlider.type = 'range';
            timedTaskSlider.min = '0';
            timedTaskSlider.max = document.getElementById("timedTask_Hours").value;
            timedTaskSlider.step = '1';
            timedTaskSlider.addEventListener("input", () => {
                setBubble(timedTaskSlider, bubble);
              });
              
              function setBubble(timedTaskSlider, bubble) {
                var val = timedTaskSlider.value;
                var min = timedTaskSlider.min ? timedTaskSlider.min : 0;
                var max = timedTaskSlider.max ? timedTaskSlider.max : 100;
                var newVal = Number(((val - min) * 100) / (max - min));
                timedTaskOutput.textContent = val;  
                
                if (val == '0') {
                    timedTaskDiv.classList.add('timedTaskDivComplete');
                }else{
                    timedTaskDiv.classList.add('timedTaskDiv');
                    timedTaskDiv.classList.remove('timedTaskDivComplete');
                }
              
                // Sorta magic numbers based on size of the native UI thumb
                bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
              }
    
              timedTaskDiv.addEventListener('dblclick', function(event) {
                timedTaskContainer.removeChild(timedTaskDiv);
              });

    timedTaskContainer.appendChild(timedTaskDiv);
    timedTaskDiv.appendChild(timedTaskSubDiv)
    timedTaskSubDiv.appendChild(timedTaskSlider);
    timedTaskSubDiv.appendChild(timedTaskOutput);

}