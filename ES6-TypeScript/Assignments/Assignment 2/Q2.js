function Armstrong() {
    var a;
    var b;
    return {
        next: function myArmstrong() {
            for (var i = 0; i <= 153; i++) {
                var numberOfDigits = i.toString().length;
                var sum = 0;
                x = i;
                while (x > 0) {
                    var remainder = x % 10;
                    sum += Math.pow(remainder, numberOfDigits);
                    x = parseInt(x / 10);
                }
                if (sum == i) {
                    console.log(i);
                }
            }
        }
    };
}
;
var getNextArmstrong = Armstrong();
console.log(getNextArmstrong.next());
