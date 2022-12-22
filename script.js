var form = document.querySelector("form");
var displayElement = document.getElementById('add-here');
var input = document.getElementById('input-field');
let task = [];


function addTask(event) {
    event.preventDefault();
    const text = input.value;
    if (text.trim() != 0) {
        if (!task.includes(text)) {
            task.push(text);
            var newDiv = document.createElement('div');
            newDiv.className = 'newDiv';
            newDiv.innerHTML = `<input type='checkbox' id='checkbox'>
                                <p id="text">${text}</p>
                                <div id="checks">
                                     <span id="done">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                     <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                   </svg>
                                    </span>
                                </div>`;
            displayElement.appendChild(newDiv);
            input.value = '';
            newDiv.querySelector('#done').addEventListener('click', function () {
                newDiv.remove();
                task.pop(text);
            });
            newDiv.querySelector('#checkbox').addEventListener('change', function () {
                newDiv.classList.toggle('change');
                // let incompleteTaskHolder = document.getElementById('completed-task');
                // newDiv.remove();
                // incompleteTaskHolder.appendChild(newDiv);
                // newDiv.querySelector('#checkbox').addEventListener('change', function () {
                //     newDiv.remove();
                //     displayElement.appendChild(newDiv);
                // });
                if (newDiv.querySelector('#checkbox').checked) {
                    incompleteTaskHolder = document.getElementById('completed-task');
                    incompleteTaskHolder.appendChild(newDiv);
                } else {
                    displayElement.appendChild(newDiv);
                }
            });
        } else {
            alert('you can\'t have same tasks!');
        }

    } else {
        alert('Please enter any task');
    }
}
form.addEventListener('submit', addTask);