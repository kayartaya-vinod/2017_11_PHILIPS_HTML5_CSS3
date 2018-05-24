importScripts("./utils.js");
onmessage = function(evt){
    console.log("Got a message", evt.data);
};
postMessage("From inside of ex13a.js...");

for(var i=1; i<=20; i++){
    postMessage("Inside ex13a.js value of i is " + i);
    sleep(200);
}

postMessage("End of ex13a.js");