var global = "global";

function a() {
    var global = "overriding global";
    console.log("Inside a():", global);
}
console.log("Outside a() before function a() execution:", global);
a();
console.log("Outside a() after function a() execution:", global);
