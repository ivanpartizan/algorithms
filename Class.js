class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let user = new User("Ivan", 35);
console.log(user);
user.introduce();
