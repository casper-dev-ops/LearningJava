// // console.log("Hello JavaScript");
// // console.log(34 * 809)


// //  let username = "Casper";
// //  console.log(username);
// //  username = "Casper Andersen";
// //  console.log(username); 
// //  username = "Casper is a great guy";
// //  console.log(username);

// //  const displayName = "Casper Andersen";
// //  console.log(displayName);  

// //  let islearning = true;
// //  console.log(islearning);
// //  islearning = false;
// //  console.log(islearning);

 const bigMath = 9999999999999999;
 const smallMath = 0.0000000000000001;

// //  console.log(bigMath < smallMath);


// //  let age = 30;
// //  if (age > 18) {
// //      console.log("You are an adult");
// //  }





// //  age = age + 1;
// //  console.log(age);


// //  console.log(5 === 5);
// //  console.log(5 === "5");
// //  console.log(5 == "5"); 

// const name = "Casper";
// let password = "12345678";
// if (password === "12345678") {
//     console.log("You are logged in as " + name);
// } else {
//     console.log("Wrong password");
// }


// let lanuage = "french";
// if (lanuage === "english") {
//     console.log("Hello");
// } else if (lanuage === "spanish") {
//     console.log("Hola");
// } else if (lanuage === "french") {
//     console.log("Bonjour");
// } else {
//     console.log("Language not supported");
// }

// // let counter = 0;
// // while (counter < 10){
// //     console.log(counter);
// //     counter ++;
// // }


// for(let i =0; i <10; i++){
//     console.log(i);
// }










// function sayHello (name) {
//     console.log("Sup broski" + name);

// }


// sayHello(" Casper");

// function addNumbers (num1, num2) {
//      console.log(num1 + num2);
// }

// function subtractNumbers (num1, num2) {
//      console.log(num1 - num2);
// }

// function multiplyNumbers (num1, num2) {
//      console.log(num1 * num2);
// }

// function divideNumbers (num1, num2) {
//      console.log(num1 / num2);
// }

// addNumbers(92, 8);
// subtractNumbers(92, 8);
// multiplyNumbers(92, 8);
// divideNumbers(92, 8);




































console.dir(document.body)



document.body.innerHTML = "<h1>Hello JavaScript 🦧</h1>";
document.body.innerHTML = document.body.innerHTML + "<button>Click me</button>";
document.body.style.color = "LightGreen";
document.body.style.backgroundColor = "gray";





class product {
    constructor(name, price) {
        this.name = name;
        this.price = price; 
    }

    displayProduct() {
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price}`);
    }    

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);

}


}


 const product1 = new product("Laptop", 999.99);
 const product2 = new product("Phone", 599.99);
 const product3 = new product("Tablet", 299.99);
 const salesTax = 0.07;

 product1.displayProduct();
 product2.displayProduct();
 product3.displayProduct();

const total = product1.calculateTotal(salesTax)

console.log(`Total price with tax: $${total.toFixed(2)}`);




