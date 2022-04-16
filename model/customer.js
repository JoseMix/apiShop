class Customer {
  constructor(name, surname, email, birthdate) {
    (this.name = name),
      (this.surname = surname),
      (this.email = email),
      (this.birthdate = birthdate);
  }
}

module.exports = Customer;
