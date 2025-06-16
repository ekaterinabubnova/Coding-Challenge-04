// Step 2 : Create a product object with name, category, price, and inventory
const products = [
  { name: "Laptop", 
    category: "electronics", 
    price: 1000, 
    inventory: 5 
  },
  
  { 
    name: "T-Shirt", 
    category: "apparel", 
    price: 30, 
    inventory: 10 
  },
  {
     name: "Milk", 
    category: "groceries", 
    price: 3, inventory: 20 
  },
  {
     name: "Toilet Paper", 
    category: "household", 
    price: 5, 
    inventory: 15
  },
  { 
    name: "Notebook", 
    category: "other", 
    price: 6, 
    inventory: 25 }
];

//Step 3: Write a for...of loop that cycles through each product and applies a dynamic discount based on category. 
for(const product of products) {
 switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      break; // no discount for others
  }
};

//Step 4: Create a variable customerType
let customers = [
  {
    nickName: "Fairy",
    number: 10,
    customerType: "student",
    purchases: [
      { name: "Laptop", quantity: 2 },
      { name: "Notebook", quantity: 1 }
    ]
  },
  {
    nickName: "Billy",
    number: 11,
    customerType: "senior",
    purchases: [
      { name: "T-Shirt", quantity: 2 },
      { name: "Milk", quantity: 3 }
    ]
  },
  {
    nickName: "Mr. Nobody",
    number: 12,
    customerType: "regular",
    purchases: [
      { name: "Toilet Paper", quantity: 1 },
      { name: "Notebook", quantity: 2 }
    ]
  }
];

//Write an if...else if chain to apply an additional discount

customers.forEach(customer => {
  if (customer.customerType === "student")//is eligible for a 5% student discount
   {
  } else if (customer.customerType === "senior")//is eligible for a 7% senior discount
  {
  } else {
  }//is not eligible for an additional discount
});


// Step 5: Simulate checkout using a for loop for first 3 customers
console.log("         === Checkout Summary ===       ");

for (let i = 0; i < 3; i++) {
  const customer = customers[i];
  let total = 0;

  for (const item of customer.purchases) {
    const product = products.find(p => p.name === item.name);

    if (product && product.inventory >= item.quantity) {
      const cost = product.price * item.quantity;
      total += cost;
      product.inventory -= item.quantity;
      

  

      console.log(`               ${product.name}              `)
      console.log(`Customer: ${customer.nickName}\nCustomer's number: ${customer.number}`);
      console.log()
    
    
  }}
        // Apply customerType discount
  if (customer.customerType === "student") {
    total *= 0.95;
  } else if (customer.customerType === "senior") {
    total *= 0.93;
  }
  console.log(`____________________________________________`)
  console.log(`TOTAL: $${total.toFixed(2)}\n\n`);
}

// Step 6: Use for...in to log each key/value pair for a single product


  console.log(`\n\n                  Single Product Info:\n\n\n`)
  for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
  }
console.log(`\n\n\n`);                 

//Step 7: All Product Info (using Object.entries & destructuring
console.log(`\n\n                  All Products Info:\n\n\n`);
products.forEach(product => {
  console.log(`\nProduct: ${product.name}`);
  
  for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }
  console.log(`----------------------------------------`);
});
