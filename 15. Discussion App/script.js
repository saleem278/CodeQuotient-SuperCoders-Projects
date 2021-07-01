let div_left = document.getElementById("leftbottom");
let div_right = document.getElementById("right");

let newquestionform = document.getElementById("newquestionform");
let second_div_response = document.createElement("div");
let questionArray = [];

newquestionform.addEventListener("click", newForm);

function newForm() {
    div_right.innerHTML = "";
    let main_div = document.createElement("div");
    main_div.setAttribute("class","new_form_div");
    let first_div = document.createElement("div");
    let h1Ele = document.createElement("h1");
    h1Ele.innerHTML = "Welcome to discussion Portal";
    first_div.appendChild(h1Ele);

    let second_div = document.createElement("div");
    let h6Ele = document.createElement("h6");
    h6Ele.innerHTML = "Enter a subject and question to get started";
    second_div.appendChild(h6Ele);

    let third_div = document.createElement("div");
    let inputEle = document.createElement("input");
    inputEle.setAttribute("placeholder", "Subject");
    inputEle.setAttribute("id", "newSubject");
    third_div.appendChild(inputEle);

    let fourth_div = document.createElement("div");
    let textareaEle = document.createElement("textarea");
    textareaEle.setAttribute("placeholder", "Question");
    textareaEle.setAttribute("id", "newQuestion");
    fourth_div.appendChild(textareaEle);

    let buttonEle = document.createElement("button");
    buttonEle.setAttribute("class", "btn btn-primary");
    buttonEle.setAttribute("id", "submit");
    buttonEle.innerHTML = "Submit";
    fourth_div.appendChild(buttonEle);

    main_div.appendChild(first_div);
    main_div.appendChild(second_div);
    main_div.appendChild(third_div);
    main_div.appendChild(fourth_div);

    div_right.appendChild(main_div);

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        let subject = document.getElementById("newSubject").value;
        let question = document.getElementById("newQuestion").value;
        if (subject === "" || question === "") {
            alert("Null");
            return;
        }
        let data = JSON.parse(localStorage.getItem("discussion"));
        if (data !== null) {
            questionArray = data;
        }

        let questionbank = {
            id: Math.random().toString(36).substr(3, 11),
            subject: subject,
            question: question,
            response: JSON.stringify([]),
        };
        questionArray.push(JSON.stringify(questionbank));
        localStorage.setItem("discussion", JSON.stringify(questionArray));
        getData();
        div_right.innerHTML = "";
    });

}

function getData() {
    div_left.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("discussion"));
    console.log(data);
    if(data!=null){
        for (let i = 0; i < data.length; i++) {
            data[i] = JSON.parse(data[i]);
            AppendOnLeft(data[i]);
        }
    }
}

function AppendOnLeft(data) {

    let main_div = document.createElement("div");
    main_div.setAttribute("class","first_div1");
    main_div.setAttribute("style", "border-bottom:1px solid grey; margin:5px;");
    main_div.setAttribute("id", data.id);
    let h3Ele = document.createElement("h3");
    h3Ele.innerHTML = data.subject;

    let h6Ele = document.createElement("h6");
    h6Ele.innerHTML = data.question;

    main_div.appendChild(h3Ele);
    main_div.appendChild(h6Ele);

    div_left.appendChild(main_div);

    main_div.addEventListener("click", function () {
        let data_left = JSON.parse(localStorage.getItem("discussion"));
        for (let i = 0; i < data_left.length; i++) {
            data_left[i] = JSON.parse(data_left[i]);
            if (data_left[i].id === main_div.id) {
                ResponseBox(data_left[i]);
            }
        }
    });
}

function ResponseBox(data) {
    let div = document.getElementById("right");
    div.innerHTML = "";
    let first_div = document.createElement("div");
    first_div.setAttribute("class","first_div");
    let h3Ele = document.createElement("h3");
    h3Ele.innerHTML = "Question";
    let first_div_inner = document.createElement("div");
    first_div_inner.setAttribute("class","first_div_inner");
    let first_div_inner_inner = document.createElement("div");
    first_div_inner_inner.setAttribute("class","first_div_inner_inner");

    let h4Ele = document.createElement("h4");
    h4Ele.innerHTML = data.subject;
    let pEle = document.createElement("p");
    pEle.innerHTML = data.question;
    let buttonEle = document.createElement("button");
    buttonEle.innerHTML = "Resolve";
    buttonEle.setAttribute("class", "btn btn-primary button2");

    buttonEle.addEventListener("click", function () {
        let discussions = JSON.parse(localStorage.getItem("discussion"));
        for (let i = 0; i < discussions.length; i++) {
            discussions[i] = JSON.parse(discussions[i]);
            discussions[i].response = JSON.parse(discussions[i].response);
        }
        let new_arr = [];
        for (let i = 0; i < discussions.length; i++) {
            if (discussions[i].id !== data.id) {
                new_arr.push(discussions[i]);
            }
        }
        for (let i = 0; i < new_arr.length; i++) {
            new_arr[i].response = JSON.stringify(new_arr[i].response);
            new_arr[i] = JSON.stringify(new_arr[i]);
        }
        localStorage.setItem("discussion", JSON.stringify(new_arr));
        getData();
        right.innerHTML = "";
    });

    first_div_inner_inner.appendChild(h4Ele);
    first_div_inner_inner.appendChild(pEle);
    first_div_inner.appendChild(h3Ele);
    first_div_inner.appendChild(first_div_inner_inner);
    first_div_inner.appendChild(buttonEle);

    first_div.appendChild(first_div_inner);

    Responses(data);

    let third_div = document.createElement("div");
    third_div.setAttribute("class","first_div");
    let h3Ele2 = document.createElement("h3");
    h3Ele2.setAttribute("style","padding-left:10px;");
    h3Ele2.innerHTML = "Add Response";

    let third_div_inner = document.createElement("div");
    third_div_inner.setAttribute("class","first_div_inner");
    let third_div_inner_inner = document.createElement("div");

    let inputEle = document.createElement("input");
    inputEle.setAttribute("placeholder", "Enter Name");
    inputEle.setAttribute("id", "responseName");

    let textareaEle = document.createElement("textarea");
    textareaEle.setAttribute("placeholder", "Enter your Answer");
    textareaEle.setAttribute("id", "responseText");

    third_div_inner.appendChild(inputEle);
    third_div_inner.appendChild(textareaEle);

    let buttonEle2 = document.createElement("button");
    buttonEle2.setAttribute("class", "btn btn-primary");
    buttonEle2.setAttribute("id", "submitResponse");
    buttonEle2.innerHTML = "Submit";

    third_div_inner_inner.appendChild(h3Ele2);
    third_div_inner_inner.appendChild(third_div_inner);
    third_div_inner_inner.appendChild(buttonEle2);

    third_div.appendChild(third_div_inner_inner);

    div.appendChild(first_div);
    div.appendChild(second_div_response);
    div.appendChild(third_div);

    buttonEle2.addEventListener("click", function () {
        let subject = document.getElementById("responseName").value;
        let question = document.getElementById("responseText").value;
        if (subject === "" || question === "") {
            alert("Null");
            return;
        }
        let response_object = {
            name: subject,
            response: question
        };
        let data1 = JSON.parse(localStorage.getItem("discussion"));
        for (let i = 0; i < data1.length; i++) {
            data1[i] = JSON.parse(data1[i]);
            data1[i].response = JSON.parse(data1[i].response);
        }
        for (let i = 0; i < data1.length; i++) {
            if (data1[i].id === data.id) {
                data1[i].response.push(response_object);
            }
        }
        for (let i = 0; i < data1.length; i++) {
            data1[i].response = JSON.stringify(data1[i].response);
            data1[i] = JSON.stringify(data1[i]);
        }
        localStorage.setItem("discussion", JSON.stringify(data1));
        for (let i = 0; i < data1.length; i++) {
            data1[i] = JSON.parse(data1[i]);
        }
        for (let i = 0; i < data1.length; i++) {
            if (data1[i].id === data.id) {
                Responses(data1[i]);
            }
        }
        document.getElementById("responseName").value = "";
        document.getElementById("responseText").value = "";
    });
}

function Responses(data) {
    second_div_response.innerHTML = "";
    second_div_response.setAttribute("class","first_div");
    let h4Ele = document.createElement("h3");
    h4Ele.innerHTML = "Response";

    let second_div_inner = document.createElement("div");
    second_div_inner.appendChild(h4Ele);
    second_div_inner.setAttribute("class","first_div");
    data.response = JSON.parse(data.response);
    for (let i = 0; i < data.response.length; i++) {
        let second_div_inner_inner = document.createElement("div");
        second_div_inner_inner.setAttribute("class","first_div_inner_inner");
        let h4Ele2 = document.createElement("h4");
        h4Ele2.innerHTML = data.response[i].name;
        let pEle = document.createElement("p");
        pEle.innerHTML = data.response[i].response;
        second_div_inner_inner.appendChild(h4Ele2);
        second_div_inner_inner.appendChild(pEle);
        second_div_inner.appendChild(second_div_inner_inner);
    }
    second_div_response.appendChild(second_div_inner);
}





let search_input = document.getElementById("search_input");
search_input.addEventListener("keyup", function () {

    let search_value = document.getElementById("search_input").value.toLowerCase();
    if (search_value === "") {
        getData();
        return
    }
    let data_from_local = JSON.parse(localStorage.getItem("discussion"));
    for (let i = 0; i < data_from_local.length; i++) {
        data_from_local[i] = JSON.parse(data_from_local[i]);
    }
    let new_array = [];
    for (let i = 0; i < data_from_local.length; i++) {
        if (data_from_local[i].subject.toLowerCase().includes(search_value) || data_from_local[i].question.toLowerCase().includes(search_value)) {
            new_array.push(data_from_local[i]);
        }
    }
    let div_search = document.createElement("div");
    div_search.setAttribute("class","first_div");
    div_search.setAttribute("style","text-align:center;border-bottom:1px solid;");
    div_left.innerHTML = "";
    if (new_array.length === 0) {
        let h3Ele = document.createElement("h3");
        h3Ele.innerHTML = "No Match Found";
        div_search.appendChild(h3Ele);
        div_left.appendChild(div_search);
    } else {
        for (let i = 0; i < new_array.length; i++) {
            AppendOnLeft(new_array[i]);
        }
    }
});

getData();

(function(){
	setTimeout(function(){
  	var preloader = document.getElementById("loading");
    preloader.removeAttribute("id");
	window.addEventListener('load', function(){
	    preloader.style.display = 'none';
	})
    function preloader(){
	    preloader.style.display = 'none';
	};
    },3000);
    
})();