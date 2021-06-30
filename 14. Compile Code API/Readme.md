**Assignment - Compile Coding Question with API**

Build a basic app to compile coding question using API's with the help of AJAX.

**User story 1**: You've to create a text editor to write your code, a output console to show output of your code and an option to select programming languages.
![compile](https://user-images.githubusercontent.com/61765706/123891984-609a6980-d977-11eb-9718-dd17d05bd1e1.png)

**User story 2**: There is also a button to compile the code. When you click on that button a POST request with code & language ID ( Python : 0 , JavaScript : 4 , C : 7 , C++ : 77 , Java : 8) send to server.

PFB the details of API

URL : https://codequotient.com/api/executeCode
Method : POST
DATA to Send : { "code" : "" , langId : ""}


**User story 3**: In response you 'll get an object with key error or codeId( your code submission ID to fetch result).

In case of error response is :
  ```{"error":"Code is null"}```

In case of success response is :
   ```{"codeId":"fghfghgkhk"}```
 
**User story 4**: If your code is submitted successfully you'll receive a codeId. This id is used for fetch the result after interval of time. When you get the output, clear the interval

**User story 5**: You need to send a get request with codeId to fetch the result. In result of this request you get an object.

PFB the details of API

URL : https://codequotient.com/api/codeResult/:codeId

Method : Get

If object's data field is empty it means result is not ready or removed from server.
  {"data":{}}

If result is ready you'll get output or errors in data's object.
  {"data"{output: "", langid: "0", code: "", errors: " "}}

**User story 6**: Show this in output console, and clear the interval.

In case you get the response in output
![compile 1](https://user-images.githubusercontent.com/61765706/123891997-65f7b400-d977-11eb-8745-3e8ed625bec8.png)

In case you get the response in errors
![compile 2](https://user-images.githubusercontent.com/61765706/123892012-68f2a480-d977-11eb-8222-c5e370b707ba.png)


Output:

```https://14compilecodewithapi-3p34g884phkhr1x14g.web.codequotient.com```

