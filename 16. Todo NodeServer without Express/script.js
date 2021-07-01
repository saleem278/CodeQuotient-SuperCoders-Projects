(function () {
    var newtask = document.getElementById("newtask");
    var taskList = document.getElementById("task-list");
    var request = new XMLHttpRequest();
    request.addEventListener("load", function () {
        var task = JSON.parse(request.responseText);
        for (i = 0; i < task.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = task[i].mytask;
            var a1 = document.createElement("a");
            a1.setAttribute("class", "delete");
            a1.setAttribute("href", "#");
            a1.innerHTML = `&#215;`;
            if(task[i].done === true){
                var a2 = document.createElement("a");
                a2.setAttribute("class", "check");
                a2.setAttribute("href", "#");
                a2.innerHTML = `&#9745;`;
            }else{
                var a2 = document.createElement("a");
                a2.setAttribute("class", "check");
                a2.setAttribute("href", "#");
                a2.innerHTML = `&#9744;`;
            }
 
            li.appendChild(a1);
            li.appendChild(a2);
            taskList.appendChild(li);
            if (task[i].done === true) {
                var target = li.parentNode.lastChild.lastChild;
                console.log(target);
                if (target.classList.contains('check')) {
                    event.preventDefault();
                    li.classList.add('checked');
                    target.innerHTML = '&#9745;';
                }
                else {
                    event.preventDefault();
                    li.classList.remove('checked');
                    target.innerHTML = '&#9744;';
                }
            }

        }
    });
    request.open("GET", "/tasks");
    request.send();

    newtask.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addNewTask();
        }
    });

    function addNewTask() {
        if (!newtask.value.trim()) {
            alert("Please Write something to add");
            newtask.value = "";
        } else {
            var request = new XMLHttpRequest();
            request.addEventListener("load", function () {
                var li = document.createElement("li");
                li.innerHTML = newtask.value;
                newtask.value = "";
                var a1 = document.createElement("a");
                a1.setAttribute("class", "delete");
                a1.setAttribute("href", "#");
                a1.innerHTML = `&#215;`;
                var a2 = document.createElement("a");
                a2.setAttribute("class", "check");
                a2.setAttribute("href", "#");
                a2.innerHTML = `&#9744;`;
                li.appendChild(a1);
                li.appendChild(a2);
                taskList.appendChild(li);
            });
            request.open("POST", "/tasks");
            request.send(JSON.stringify({ mytask: newtask.value,done:false}));
        }
    }
    taskList.addEventListener("click", function (e) {
        var target = e.target;
        var li = target.parentNode;
        console.log(li);
        if (target.classList.contains("check")) {
            e.preventDefault();
            if (li.classList.contains("checked")) {
                li.classList.remove("checked");
                target.innerHTML = "&#9744;";
                var request = new XMLHttpRequest();
                var target = li.firstChild.textContent;
                console.log(target);
                target = target.trim();
                request.open("POST", "/done");
                request.send(JSON.stringify({ mytask: target, done: false }));
            } else {
                li.classList.add('checked');    
                target.innerHTML = '&#9745;';
                var request = new XMLHttpRequest;
                event.preventDefault();
                var target = li.firstChild.textContent;
                target = target.trim();
                request.open('POST', '/done');
                request.send(JSON.stringify({ mytask: target, done: true }));
            }
        } else if (target.classList.contains("delete")) {
            var request = new XMLHttpRequest();
            var target = li.firstChild.textContent;
            target = target.trim();
            li.parentNode.removeChild(li);
            request.open("POST", "/remove");
            request.send(JSON.stringify({ mytask: target }));
        }
    });

})();