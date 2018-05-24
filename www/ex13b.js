importScripts("./utils.js");

postMessage("From inside of ex13b.js...");

for(var i=1; i<=10; i++){
    postMessage("Inside ex13b.js value of i is " + i);
    sleep(400);
}

postMessage("End of ex13b.js");
