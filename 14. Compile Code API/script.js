var compile_run = document.getElementById("compile");

var code = document.getElementById("ourcode");
var result = document.getElementById("result");

function getLangId() {
    var select_lang = document.getElementById("lang").value;
    return select_lang;
}

compile_run.addEventListener("click", function () {
    result.innerHTML = "";
    object = ({ code: code.value, langId: getLangId() });
    objectToSend = JSON.stringify(object);
    request1 = new XMLHttpRequest();
    request1.open("POST", "https://codequotient.com/api/executeCode");
    request1.setRequestHeader("Content-Type", "application/json");
    request1.send(objectToSend);
    request1.addEventListener("load", function (event) {
        response1 = JSON.parse(event.target.responseText);
        compile_run.removeAttribute("class");
        compile_run.setAttribute("class", "buttonload");
        compile_run.innerHTML = `Compiling&nbsp;&nbsp;<i class="fa fa-refresh fa-spin slow-spin"></i>`;
        newcodeId = response1.codeId;

        if (!newcodeId) {
            alert("Please Write your code");
            compile_run.removeAttribute("class", "buttonload");
            compile_run.innerHTML = "Compile";
        }
        else {
            setTimeout(function () {
                var request2 = new XMLHttpRequest();
                request2.open("GET", `https://codequotient.com/api/codeResult/${newcodeId}`);
                request2.send();
                setTimeout(function () {
                    var parseResponse = JSON.parse(request2.responseText);
                    var parseObject = JSON.parse(parseResponse.data);
                    compile_run.removeAttribute("class","buttonload");
                    compile_run.innerHTML= "Compile";
                    if (parseObject.output.length != 0)
                        result.innerHTML += parseObject.output;
                    else
                        result.innerHTML = "ERROR: "+parseObject.errors;
                }, 1000);
            }, 6000);
        }
    });
});