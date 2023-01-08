class Validation {
  //validate an email using regex
  validateEmail(email) {
    let re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  //validate a password using regex
  validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  }
  //validate a username using regex
  validateUsername(username) {
    let re = /^[a-zA-Z0-9]{3,}$/;
    return re.test(username);
  }
  validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  checkEmpty(data) {
    let errors = {};
    const fields = [
      "username",
      "firstName",
      "lastName",
      "email",
      "password",
      "confirmPassword",
    ];
    fields.forEach((field) => {
      if (data[field] === "") {
        errors[field] = `${field} is required`;
      }
    });
    if (!this.validateEmail(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!this.validatePassword(data.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  }
  validate(data) {
    let errors = {};
    if (!this.validateEmail(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!this.validatePassword(data.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }
    if (!this.validateUsername(data.username)) {
      errors.username =
        "Username must be at least 3 characters long and contain only letters and numbers";
    }
    if (!this.validateConfirmPassword(data.password, data.confirmPassword)) {
      errors.confirmPassword = "Passwords do not match";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  }
}
export default new Validation();
