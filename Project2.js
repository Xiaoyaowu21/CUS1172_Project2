document.addEventListener('DOMContentLoaded', function(){
        
    let selectedColor = '';

    document.querySelector('#btnRed').onclick = function() {
        selectedColor = 'red';
    };

    document.querySelector('#btnBlue').onclick = function() {
        selectedColor = 'blue';
    };

    document.querySelector('#btnGreen').onclick = function() {
        selectedColor = 'green';
    };

    document.querySelector("#new-task").onsubmit = function(){
        const task_text = document.querySelector('#task').value;
        const status_value = document.querySelector('#status').value;
        const li = document.createElement('li');

        let new_task_html = `
            <span style="color: ${selectedColor};">
                ${task_text} [${status_value}]
            </span>
            <button class="markComplete">Completed</button>
            <button class="remove">Remove</button>
        `;
      
        li.innerHTML = new_task_html;
        document.querySelector("#tasks_list").append(li);
        document.querySelector("#task").value = '';
        return false;
    };

    document.addEventListener('click', function(event){
        const element = event.target;
        if(element.className === 'remove'){
            element.parentElement.remove();
        }
        else if (element.className === 'markComplete') {
            const taskSpan = element.parentElement.querySelector('span');
            taskSpan.style.textDecoration = 'line-through';

            const originalText = taskSpan.textContent; 
            const bracketIndex = originalText.lastIndexOf('[');
            if (bracketIndex !== -1) {
                const newText = originalText.slice(0, bracketIndex) + '[completed]';
                taskSpan.textContent = newText;
            }
        }
    });
});
