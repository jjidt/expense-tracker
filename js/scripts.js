var Purchase = {
  totalCost: function() {
    return this.amount*this.quantity;
  }
}

var Category = {};

$(document).ready(function(){
  var currentCategory;
  $("form#category").submit(function(event){

    event.preventDefault();
    var inputtedCategory = $("input#category-input").val();
    var newCategory = Object.create(Category)
    newCategory.name = inputtedCategory
    newCategory.purchases = [];

    $("#category-list").append("<li class='clickable category-item'>"+inputtedCategory+"</li>");
    $("input#category-input").val("");
    $(".category-item").last().click(function(){
      currentCategory = newCategory;
      //empty all purchases
      //add all purchases from currentCategory.purchases
      // var categoryTitle = $(this).text();
      $("#category-title").empty().append(currentCategory.name);

    });
  });

  $("form#expenses").submit(function(event){
    var inputtedDescription = $("input#description").val();
    var inputtedAmount = parseInt($("input#amount").val());
    var inputtedQuantity = parseInt($("input#quantity").val());
    var newPurchase = Object.create(Purchase);
    newPurchase.describe = inputtedDescription;
    newPurchase.amount = inputtedAmount;
    newPurchase.quantity = inputtedQuantity;
    currentCategory.purchases.push(newPurchase);
    $("table#purchases").append("<tr><td>" + newPurchase.describe + "</td><td>$ "
                                + newPurchase.amount + "</td><td>" + newPurchase.quantity
                                + "</td><td>$ " + newPurchase.totalCost() +"</td></tr>");
    event.preventDefault();
  });




});
