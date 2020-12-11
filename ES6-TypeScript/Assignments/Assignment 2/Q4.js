var chatroom1 = new Map([
    ['Ben', 'Hi my name is Ben!'],
    ['Clark', 'Hi my name is Clark!'],
    ['Helen', 'Hi my name is Helen!']
]);
var chatroom2 = new Map([
    ['Jen', 'Hi my name is Jen!'],
    ['Danny', 'Hi my name is Danny!'],
    ['Sara', 'Hi my name is Sara!']
]);
console.log("Users and their messages in classroom1");
chatroom1.forEach(function (value, key, map) {
    console.log(key + ": " + value);
});
console.log("Users and their messages in classroom2");
chatroom2.forEach(function (value, key, map) {
    console.log(key + ": " + value);
});
