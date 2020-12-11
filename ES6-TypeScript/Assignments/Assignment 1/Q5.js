function add(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(add(5, 2));
function userFriends(username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(friends[1]);
    console.log(username, friends);
}
userFriends("Harry", "Ben", "Jerry", "Lara");
var printcapitalNames = function () {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    for (var i in m) {
        console.log(m[i].toUpperCase());
    }
};
var display = ["Harry", "Ben", "Jerry", "Lara"];
printcapitalNames.apply(void 0, display);
