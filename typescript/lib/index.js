var a;
a = 1;
a = "1";
var fun = function (str, num) {
    return false;
};
var fun1 = function (str, num) {
    return true;
};
var fun2 = function (str, num) {
    return true;
};
var fun3 = function (str, num) {
    return true;
};
var aa = 1;
var arr = ["1", 1, true];
var bb;
bb = [];
var obj;
obj = {
    name: "adam",
    age: 18,
    properties: ["car", "house"],
    walk: function () { console.log(this.name, "is walking"); }
};
var employee = {
    name: "adam",
    age: 18,
    walk: function () {
        console.log(this.name, "is walking");
    },
    properties: []
};
var fun4 = function (size) {
    console.log(size);
};
var size = "small";
fun4(size);
fun4(size);
var fun5 = function (arg) { return true; };
fun5("123");
var employee1 = {
    name: "adam",
    age: "18"
};
var fun6 = function (arg) {
    arg.toFixed();
};
//# sourceMappingURL=index.js.map