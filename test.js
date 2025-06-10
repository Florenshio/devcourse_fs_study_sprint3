var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this._celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (value) {
            if (value < -273.15) {
                throw new Error("Temperature below absolute zero is not possible");
            }
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        set: function (value) {
            this.celsius = (value - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.celsius = 30;
console.log(temp.fahrenheit); // 86
temp.fahrenheit = 68;
console.log(temp.celsius); // 20
