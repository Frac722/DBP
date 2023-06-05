document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-task').onsubmit = (event) => {
        event.preventDefault();

        const cb = document.createElement("input");
        cb.setAttribute("type", "checkbox");

        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = document.querySelector('#task').value;
        li.appendChild(cb);
        li.appendChild(taskText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(deleteButton);

        cb.addEventListener('change', () => {
            if (cb.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        });

        document.querySelector('#tasks').appendChild(li);

        document.querySelector('#task').value = '';

        return false;
    };

    document.querySelector('#complete-all').onclick = () => {
        const checkboxes = document.querySelectorAll('#tasks input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
            const taskText = checkbox.nextElementSibling;
            taskText.style.textDecoration = "line-through";
        });
    };
});
