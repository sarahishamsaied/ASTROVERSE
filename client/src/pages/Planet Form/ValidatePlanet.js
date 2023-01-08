class ValidatePlanet {
  constructor() {
    this.errors = {};
  }

  checkEmpty(data) {
    console.log(Object.keys(data).length);
    if (Object.keys(data).length === 0) {
      this.errors = { message: "No data received" };
    }
    const fields = [
      "name",
      "distance",
      "mass",
      "temperature",
      "gravity",
      "noOfMoons",
      "rotationDuration",
      "rotationalSpeed",
      "distanceFromEarth",
      "noOfSatellites",
      "imgUrl",
      "structure",
    ];
    fields.forEach((field) => {
      if (data[field] === "") {
        this.errors[field] = `${field} is required`;
      }
    });
    return {
      errors: this.errors,
      isValid: Object.keys(this.errors).length === 0,
    };
  }
}
export default new ValidatePlanet();
