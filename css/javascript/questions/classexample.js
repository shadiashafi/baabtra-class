class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("abc", 20);
console.log(person1.name + " " + person1.age);

// class NewProduct{
//     product_name = "";
//     category = "";
//     description = "";
//     price = 0.0;
//     added_date = "";

//     display_product(){
//        console.log("display product") ;
//     }

//     add_product(){
//         console.log("add product") ;
//      }
// };
//  let product1 = new NewProduct();
//  product1.display_product();
//  product1.add_product();

// class NewProduct{
//     product_name = "Iphone";
//     category = "Mobile";
//     description = "Iphone 14 pro max";
//     price = 1400000.0;
//     added_date = "12/12/2022";

//     display_product(){
//        console.log("display product") ;
//     }

//     add_product(){
//         console.log("add product") ;
//      }
// };
//  let product1 = new NewProduct();
//  product1.display_product();
//  product1.add_product();
//  console.log("*************************");
//  console.log(product1.product_name);
//  console.log(product1.category);
//  console.log(product1.description);
//  console.log(product1.price);
//  console.log(product1.added_date);

class NewProduct {
  static count = 0;

  constructor(product_name, category, description, price, added_date) {
    this.product_name = product_name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.added_date = added_date;
    NewProduct.count = NewProduct.count + 1;
  }

  display_product() {
    console.log("display product");
    console.log(`
       name: ${this.product_name} \n
       category: ${this.category} \n
        description: ${this.description} \n
        price: ${this.price} \n
        added_date: ${this.added_date} \n
       `);
  }

  product_count() {
    console.log(`Total no of products: ${NewProduct.count}`);
  }
}
let product1 = new NewProduct(
  "monitor",
  "hardware",
  "accessories",
  "7000",
  "12/12/2022"
);
let product2 = new NewProduct(
    "keyboard",
    "hardware",
    "accessories",
    "700",
    "12/04/2022"
  );
  let product3 = new NewProduct(
    "motherboard",
    "hardware",
    "accessories",
    "10000",
    "12/12/2023"
  );
console.log(product1);
product1.display_product();
product1.product_count();
