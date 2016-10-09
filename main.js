//Answer 1
//to find all prices and place them in a new array
function prices(items) {
  var allPrices = [];
  for (var i = 0; i < items.length; i++) {
      allPrices.push(items[i].price);
  }
  return allPrices;
}
//to add all the prices togther
var allPrices = prices(items);
var totalPrice = 0;
for (var x = 0; x < allPrices.length; x++) {
    totalPrice += allPrices[x];
}
//to divide the total by the number of objects in the array
var answerTo1 = totalPrice/allPrices.length;
document.getElementById("answer1").innerHTML ="The average price is $" + answerTo1.toFixed(2);

//Answer 2
//from the items array, obtain the items priced between "14-18"
//call out the items names from the result of the previous question
//to pull out items with price btwn $14 and $18
var btwnPrices = items.filter(function(x) {return (x.price > 14.00 && x.price < 18.00)});
var btwnList = btwnPrices.map(function(a) {return a.title;});
document.getElementById("answer2").innerHTML = btwnList;

//str = arr.join([separator = ','])

//Answer 3
//Which item has a "GBP" currency code? Display it's name and price
//Find property with GBP
//Display its name and price

//to find object of array with GBP then to map out title and price of the item
var gbpItem = items.filter(function(x) {return (x.currency_code === "GBP")});
var gbpTitle = gbpItem.map(function(a) {return a.title;});
var gbpPrice = gbpItem.map(function(a) {return a.price;});
document.getElementById("answer3").innerHTML = gbpTitle + " costs " + gbpPrice;


//Answer 4
