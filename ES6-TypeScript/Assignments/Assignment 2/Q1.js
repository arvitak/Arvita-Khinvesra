var previousno = Symbol('pno');
var currentno = Symbol('cno');
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        this[previousno] = 0;
        this[currentno] = 1;
    }
    Fibonacci.prototype.next = function (n) {
        var final;
        for (var i = 0; i < n; i++) {
            console.log(this[previousno]);
            final = this[previousno] + this[currentno];
            this[previousno] = this[currentno];
            this[currentno] = final;
            

        }
        return final;
    };
    return Fibonacci;
}());
;
var f = new Fibonacci();
console.log(f.next(8));
