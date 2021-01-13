let XMLHttpsRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "secs:";
}

function makeAJAXCall(methodType, url, callback, async = true, data = null){
    let xhr = new XMLHttpsRequest();
    xhr.onreadystatechange = function(){
        console.log("State changed Called at: " + showTime() + "Ready State:" + xhr.readyState + "Status:" + xhr.status);
        if(xhr.readyState === 4){
            //Matching all 200 Series Responses
            if(xhr.status === 200 || xhr.status === 201){
                callback(xhr.responseText);
            } else if(xhr.status >= 400){
                console.log("Handle 400 Clent Error or 500 Server Error at:" + showTime());
            }
       }
    }

    xhr.open(methodType, url, async);
    if(data){
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType + "request sent to the server at:" + showTime());
}

const getURL = "http://127.0.0.1:3000/employees/1";

function getUserDetails(data){
    console.log("Get User Data  at:" + showTime() + "data:" + data)
}

makeAJAXCall("GET", getURL, getUserDetails, true);

console.log("Made GET AJAX Call to server at:" + showTime());

const deleteURL = "http://localhost:3000/employees/4";

function userDeleted(data){
    console.log("User Deleted at:" + showTime() + "data: " + data)
}

makeAJAXCall("DELETE", deleteURL, userDeleted, false);
console.log("Made DELETE AJAX Call to server at:" + showTime()); 
const postURL = "http://localhost:3000/employees/";
const emplData = {"name": "Harry", "salary": "5000"};

function userAdded(data){
    console.log("User Added at:" + showTime() + "data:" + data);
}

makeAJAXCall("POST", postURL, userAdded, true, emplData);
console.log("Made POST AJAX Call to server at:" + showTime()); 