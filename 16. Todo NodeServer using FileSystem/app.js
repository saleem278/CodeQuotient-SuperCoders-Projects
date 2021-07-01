var http = require("http");
var url = require("url");
var fs = require("fs");

function Read(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            throw err;
        }
        callback(null, data);
        return;
    });
}
function readTasks(callback){
    fs.readFile("tasks",function(err,data){
        if(err){
            throw err;
        }
        var tasks;
        if(data.length===0){
            tasks=[];
        }else{
            tasks = JSON.parse(data);
        }
        callback(tasks);
    });
}

function ReadJSONBody(req,callback){
    var body ="";
    req.on("data",function(chunk){
        body += chunk;
    });
    req.on("end",function(){
        var data = JSON.parse(body);
        callback(data);
    });
}

function createTask(mytask,callback){
    readTasks(function(tasks){
        tasks.push({mytask:mytask,done:false});
        writeTasks(tasks,callback);
    });
}

function writeTasks(tasks, callback) {
    var tasksObject = JSON.stringify(tasks);
    fs.writeFile('tasks', tasksObject, function (err) {
      if (err) {
        throw err;
      }
  
      callback();
    });
  }

http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    if (req.method === "GET") {
        if (path === "/") {
            Read("index.html", function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            });
        } else if (path === "/style.css") {
            Read("."+path, function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/css" });
                res.write(data);
                res.end();
            });
        } else if (path === "/script.js") {
            Read("."+path, function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/javascript" });
                res.write(data);
                res.end();
            });
        } else if (path === "/tasks") {
            readTasks(function (tasks) {
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.write(JSON.stringify(tasks));
                res.end();
            });
        }else{
            res.end();
        }
    } else if (req.method === "POST") {
        if(path ==="/tasks"){
            ReadJSONBody(req,function(task){
                createTask(task.mytask,function(){
                    res.end();
                });
            });
        }else if(path==="/remove"){
            ReadJSONBody(req,function(task){
                Read("tasks",function(err,data){
                    var tasks = JSON.parse(data);
                    for(i=0;i<tasks.length;i++){
                        if(tasks[i].mytask === task.mytask){
                            tasks.splice(i,1);
                            break;
                        }else continue;
                    }
                    tasks = JSON.stringify(tasks);
                    fs.writeFile("tasks",tasks,function(err){
                        if(err) throw err;
                    })
                    res.end();
                })
            })
        }else if(path==="/done"){
            ReadJSONBody(req, function (task) {
                console.log(task);
                Read("tasks",function(err,data){
                    var tasks = JSON.parse(data);
                    for(var i=0;i<tasks.length;i++){
                        if(tasks[i].mytask === task.mytask){
                            tasks[i].done = task.done;
                            tasks = JSON.stringify(tasks);
                            fs.writeFile("tasks.txt",tasks,function(err){
                                if(err) throw err;
                            })
                            break;
                        }
                        else continue;
                    }
                    res.end();
                })
            })
        }else{
            res.end();
        }
    } else {
        res.end();
    }
}).listen(3333);
console.log("Server Running at 3333");