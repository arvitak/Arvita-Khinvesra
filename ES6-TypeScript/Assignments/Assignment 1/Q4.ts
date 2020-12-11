let names=['Tom','Ivan','Jerry'];

let newnames = names.map(l => ({
    name:l , length:l.length
}) );
console.log(newnames);
