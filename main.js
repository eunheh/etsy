//Answer 1
//Show me how to calculate the average price of all items.
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
//var allPrices = items.map(function(x) {return items[x].price});

//to divide the total by the number of objects in the array
var answerTo1 = totalPrice/allPrices.length;
document.getElementById("answer1").innerHTML ="The average price is $" + answerTo1.toFixed(2);

//Answer 2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//from the items array, obtain the items priced between "14-18"
//call out the items names from the result of the previous question
//to pull out items with price btwn $14 and $18
var btwnPrices = items.filter(function(x) {return (x.price > 14.00 && x.price < 18.00)});
var btwnList = btwnPrices.map(function(a) {return a.title;});
document.getElementById("answer2").innerHTML = btwnList.join(" <br> <br> ");


//Answer 3
//Which item has a "GBP" currency code? Display it's name and price
//Find property with GBP
//Display its name and price

//to find object of array with GBP then to map out title and price of the item
var gbpItems = items.filter(function(x) {return (x.currency_code === "GBP")});
var gbpTitle = gbpItems.map(function(a) {return a.title;});
var gbpPrice = gbpItems.map(function(a) {return a.price;});
document.getElementById("answer3").innerHTML = gbpTitle + " costs " + gbpPrice;


//Answer 4
//Display a list of all items who are made of wood
//Find object of material with wood
//get object title and say "is made of wood" at the end for each item.
//var woodItems = items.filter(function(x) {return x.material});
// var woodMade = items.filter(function(x) {return x.materials});
var woodItems = items.filter(function(x) {return x.materials.includes("wood")});
var woodTitle = woodItems.map(function(a) {return a.title;});
document.getElementById("answer4").innerHTML = woodTitle.join(" is made of wood <br> <br> ");

//Answer 5
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
//find of the materials, which has 8 or more objects in the array
//display the items through mapping HOF
var eightMat = items.filter(function(x) {return x.materials.length > 8});
var matTitle = eightMat.map(function(a) {return a.title;});
var matDetail = eightMat.map(function(y) {return y.materials})
var eightMat1 = eightMat[0].title + " has " + (matDetail[0].length) + " materials <br> <br>"+ matDetail[0].join("<br> <br>")
var eightMat2 = eightMat[1].title + " has " + (matDetail[1].length) + " materials <br> <br>"+ matDetail[1].join("<br> <br>")
document.getElementById("answer5").innerHTML = eightMat1 + eightMat2;

// + matDetail.length + matDetail;


// var matDetail = matNum.map(function(x) {return (items.title)});
// + "has" + (x.material).length + "materials";});

//Anser 6
//How many items were made by their sellers?
var whoMade = items.map(function (x) {return x.who_made});
var selfMade = whoMade.filter(function (y) {return y === "i_did"});
document.getElementById("answer6").innerHTML = selfMade.length + " were made by their sellers";
