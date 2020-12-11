var names = ['Tom', 'Ivan', 'Jerry'];
var newnames = names.map(function (l) { return ({
    name: l, length: l.length
}); });
console.log(newnames);
