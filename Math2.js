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

    exp.encomma = function(number, delimiter) {
        // Add commas to a large number.

        if (!delimiter) delimiter = ",";

        // Turn it into a number with existing commas stripped.
        if (typeof number === "string") {
            number = exp.excomma(number);
        }

        var str = number.toString();
        var result = [];
        var dec;

        // Store the decimal part for later reattachment.
        if (str.indexOf(".") !== -1) {
            var split = str.split(".");
            str = split[0];
            dec = split[1];
        }

        var counter = 1;

        // Loop backwards and insert a comma every three numbers (unless it's the beginning of the number).
        for (var i = str.length - 1; i >= 0; i--) {
            result.push(str[i]);

            if (counter === 3 && i !== 0) {
                result.push(delimiter);
                counter = 0;
            }

            counter++;
        }

        // Reverse to undo the backwards loop.
        result.reverse();

        // Reattach decimal part if there was one.
        if (dec) result.push(".", dec);

        // Return a string.
        return result.join("");
    }

    exp.excomma = function(string) {
        return parseFloat(string.replace(/,/g, ""));
    }

    exp.decomma = exp.excomma; // decomma makes more sense.

    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = exp;
    } else {
        if (typeof window !== "undefined") {
            window.Math2 = exp;
        }
    }
})();