window.onload = function () {
    const todoList = document.getElementById('todoList');
    const inputTodo = document.getElementById('inPutodo');
    const btnAdd = document.getElementById('btnAdd');

    btnAdd.addEventListener('click', function(e) {
        let todoValue = inputTodo.value;
        if (todoValue == '') {
            alert("할일을 입력하세요");
            return;
        }
        const listItem = document.createElement('li');
        listItem.className = 'd-flex list-group-item';
        listItem.innerText = todoValue;

        const listBtn = document.createElement('button');
        listBtn.className = 'btn-close ms-auto';
        listBtn.onclick = function(e) {
            let pNode = e.target.parentNode;
            pNode.remove();
        };
        listItem.appendChild(listBtn);

        todoList.appendChild(listItem);

        inputTodo.value = '';
    });
};

