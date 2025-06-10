class Temperature {
    private _celsius: number;
  
    constructor(celsius: number) {
      this._celsius = celsius;
    }
  
    get celsius(): number {
      return this._celsius;
    }
  
    set celsius(value: number) {
      if (value < -273.15) {
        throw new Error("Temperature below absolute zero is not possible");
      }
      this._celsius = value;
    }
  
    get fahrenheit(): number {
      return this._celsius * 9/5 + 32;
    }
  
    set fahrenheit(value: number) {
      this.celsius = (value - 32) * 5/9;
    }
  }
  
  const temp = new Temperature(25);
  console.log(temp.fahrenheit); // 77
  temp.celsius = 30;
  console.log(temp.fahrenheit); // 86
  temp.fahrenheit = 68;
  console.log(temp.celsius); // 20