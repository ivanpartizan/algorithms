let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal has ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is ${totalPrice}$`;
  },
};

menu.addDishToCourse("appetizers", "appetizer1", 2.5);
menu.addDishToCourse("appetizers", "appetizer2", 3);
menu.addDishToCourse("appetizers", "appetizer3", 3.5);
menu.addDishToCourse("mains", "main1", 12.5);
menu.addDishToCourse("mains", "main2", 13);
menu.addDishToCourse("mains", "main3", 13.5);
menu.addDishToCourse("desserts", "desserts1", 4.5);
menu.addDishToCourse("desserts", "desserts2", 5);
menu.addDishToCourse("desserts", "desserts3", 5.5);

let meal = menu.generateRandomMeal();
console.log(meal);
