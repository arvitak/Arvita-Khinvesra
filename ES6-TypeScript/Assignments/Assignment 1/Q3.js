var id = 20;
var title = "papers";
var price = 400;
var order = {
    id: id,
    title: title,
    price: price,
    printOrder: function () {
        return title;
    },
    getPrice: function () {
        return price;
    }
};
 
 var clone= Object.assign({},order);
 console.log(clone);