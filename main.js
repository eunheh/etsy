//var apple = items[2].price;

//Answer 1
//pull out all the price properties then add them together for total price
//use the sum and divide that into the total number of objects in the array
var items = [
    { "title" : 'eggs', 'price' : 67},
    { "title" : 'cucumber', 'price' : 40},
    { "title" : 'Apple', 'price' : 15},
    { "title" : 'bacon', 'price' : 18},
    { "title" : 'Bagel', 'price' : 13},
    { "title" : 'Cheese', 'price' : 38},
];

function prices(items) {
  var allPrices = [];
  for (var i = 0; i < items.length; i++) {
      allPrices.push(items[i].price);
  }
  return allPrices;
}
var allPrices = prices(items);
var totalPrice = 0;
for (var x = 0; x < allPrices.length; x++) {
    totalPrice += allPrices[x];
}
//The average price is $answer1
var answer1 = totalPrice/allPrices.length;
console.log(answer1.toFixed(2))

//Answer 2
//from the items array, obtain the items priced between "14-18"
//call out the items names from the result of the previous question
var items = [
    { 'title' : 'eggs', 'price' : 67, 'currency_code' : "USD"},
    { 'title' : 'cucumber', 'price' : 40, 'currency_code' : "GBP"},
    { 'title' : 'Apple', 'price' : 15, 'currency_code' : "USD"},
    { 'title' : 'bacon', 'price' : 16, 'currency_code' : "USD"},
    { 'title' : 'Bagel', 'price' : 7, 'currency_code' : "USD"},
    { 'title' : 'Cheese', 'price' : 38, 'currency_code' : "USD"},
];

var btwnPrices = items.filter(function(x) {return (x.price >= 14.00 && x.price <= 18.00)});
console.log(btwnPrices)

function btwnList(items) {
  var titleBtwn = [];
  for (var i = 0; i < items.length; i++) {
      btwnPrices.push(items[i].title);
  }
  return titleBtwn;
};

console.log(btwnList.toString);
//lines = foo.value.split(/\r\n|\r|\n/g);


//Answer 3
//Which item has a "GBP" currency code? Display it's name and price
//Find property with GBP
//Display its name and price
var items = [
    { 'title' : 'eggs', 'price' : 67, 'currency_code' : "USD"},
    { 'title' : 'cucumber', 'price' : 40, 'currency_code' : "GBP"},
    { 'title' : 'Apple', 'price' : 15, 'currency_code' : "USD"},
    { 'title' : 'bacon', 'price' : 16, 'currency_code' : "USD"},
    { 'title' : 'Bagel', 'price' : 7, 'currency_code' : "USD"},
    { 'title' : 'Cheese', 'price' : 38, 'currency_code' : "USD"},
];

var gbpItem = items.filter(function(x) {return (x.currency_code === "GBP")});
var answer4 = gbpItem.map(function(a) {return a.title;});
var answer3 = gbpItem.map(function(a) {return a.price;});
console.log(answer3 + " costs " + answer4)


//Answer 4
