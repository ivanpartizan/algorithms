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
user.introduce();

// Converter
class Converter {
  constructor(number, string) {
    this.number = number;
    this.string = string;
  }

  get unit() {
    return this.string;
  }
  get size() {
    return `${this.number} ${this.string}`;
  }

  toB() {
    switch (this.string) {
      case "KB":
        this.string = "B";
        this.number = Math.floor(this.number * 1024 * 1000) / 1000;
        break;
      case "MB":
        this.string = "B";
        this.number = Math.floor(this.number * 1024 * 1024 * 1000) / 1000;
        break;
      case "GB":
        this.string = "B";
        this.number =
          Math.floor(this.number * 1024 * 1024 * 1024 * 1000) / 1000;
        break;
      case "TB":
        this.string = "B";
        this.number =
          Math.floor(this.number * 1024 * 1024 * 1024 * 1024 * 1000) / 1000;
        break;
    }
  }

  toKB() {
    switch (this.string) {
      case "B":
        this.string = "KB";
        this.number = Math.floor((this.number / 1024) * 1000) / 1000;
        break;
      case "MB":
        this.string = "KB";
        this.number = Math.floor(this.number * 1024 * 1000) / 1000;
        break;
      case "GB":
        this.string = "KB";
        this.number = Math.floor(this.number * 1024 * 1024 * 1000) / 1000;
        break;
      case "TB":
        this.string = "KB";
        this.number =
          Math.floor(this.number * 1024 * 1024 * 1024 * 1000) / 1000;
        break;
    }
  }

  toMB() {
    switch (this.string) {
      case "B":
        this.string = "MB";
        this.number = Math.floor((this.number / 1024 / 1024) * 1000) / 1000;
        break;
      case "KB":
        this.string = "MB";
        this.number = Math.floor((this.number / 1024) * 1000) / 1000;
        break;
      case "GB":
        this.string = "MB";
        this.number = Math.floor(this.number * 1024 * 1000) / 1000;
        break;
      case "TB":
        this.string = "MB";
        this.number = Math.floor(this.number * 1024 * 1024 * 1000) / 1000;
        break;
    }
  }

  toGB() {
    switch (this.string) {
      case "B":
        this.string = "GB";
        this.number =
          Math.floor((this.number / 1024 / 1024 / 1024) * 1000) / 1000;
        break;
      case "KB":
        this.string = "GB";
        this.number = Math.floor((this.number / 1024 / 1024) * 1000) / 1000;
        break;
      case "MB":
        this.string = "GB";
        this.number = Math.floor((this.number / 1024) * 1000) / 1000;
        break;
      case "TB":
        this.string = "GB";
        this.number = Math.floor(this.number * 1024 * 1000) / 1000;
        break;
    }
  }

  toTB() {
    switch (this.string) {
      case "B":
        this.string = "TB";
        this.number =
          Math.floor((this.number / 1024 / 1024 / 1024 / 1024) * 1000) / 1000;
        break;
      case "KB":
        this.string = "TB";
        this.number =
          Math.floor((this.number / 1024 / 1024 / 1024) * 1000) / 1000;
        break;
      case "MB":
        this.string = "TB";
        this.number = Math.floor((this.number / 1024 / 1024) * 1000) / 1000;
        break;
      case "GB":
        this.string = "TB";
        this.number = Math.floor((this.number / 1024) * 1000) / 1000;
        break;
    }
  }
}
var file = new Converter(1, "TB");
file.size();
