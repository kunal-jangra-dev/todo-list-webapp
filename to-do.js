const input = document.getElementById("taskinput");
const addBtn = document.getElementById("Add");
const taskList = document.getElementById("Tasks");

addBtn.addEventListener("click", function () {
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");

    span.textContent = taskText;
    btn.textContent = "Done";
    btn.classList.add("done-btn");

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);

    input.value = "";

    span.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    btn.addEventListener("click", function () {
        li.remove();
    });
});