(function() {
    var exp = {};

    exp.clamp = function(num, low, high) {
        // Clamp a number to a value between low and high (inclusive)
        return Math.min(high, Math.max(low, num));
    }

    exp.range = function(low, high, round) {
        // Return a random number between 'low' and 'high' (inclusive)
        var num = Math.random() * (high - low) + low;

        return round
            ? Math.round(num)
            : num;
    }

    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = exp;
    } else {
        if (typeof window !== "undefined") {
            window.Math2 = exp;
        }
    }
})();