class Blender {

  name = "";
  isOn = false;
  currentSpeed = 0;
  blenderSpeeds = [0, 1, 2, 3, 4];


  constructor(brand) {
    this.brand = brand;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  showBrand() {
    return this.brand;
  }

  validateIsOn() {
    return this.isOn;
  }

  liquefy(speed) {
    if (!this.isOn)
      throw new Exception("error", "La licuadora no esta encendida", 1);

    this.currentSpeed = speed;
    this.validateSpeed(speed);
  }

  validateSpeed(speed) {
    if (!this.blenderSpeeds.includes(speed))
      throw new Exception("error", " la velocidad no es valida", 2);
  }
}
class Exception {

  error;
  message;
  code;

  constructor(error, message, code) {
    this.error = error;
    this.message = message;
    this.code = code
  }

  showMessaError() {
    console.log(`Error: ${this.error} exception: ${this.message} status: ${this.code}`)
  }
}

module.exports = Blender