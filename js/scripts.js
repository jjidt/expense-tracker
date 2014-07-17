var Purchase = {
  totalCost: function() {
    return this.amount*this.quantity;
  }
}

var Category = {
  initialize: function(name) {
    this.purchases = [];
    this.name = name;
  }
};

$(document).ready(function(){
  var currentCategory;
  $("form#category").submit(function(event){
    event.preventDefault();
    var inputtedCategory = $("input#category-input").val();
    var newCategory = Object.create(Category)
    newCategory.name = inputtedCategory
    newCategory.initialize()
    console.log(newCategory);

    $("#category-list").append("<li class='clickable category-item'>"
      +inputtedCategory+"</li>");
    $("input#category-input").val("");
    $(".category-item").last().click(function(){
      currentCategory = newCategory;
      //empty all purchases
      //add all purchases from currentCategory.purchases
      // var categoryTitle = $(this).text();
      $("#category-title").empty().append(currentCategory.name);
      $("table#purchases").empty();

      currentCategory.purchases.forEach(function(purchase) {
      $("table#purchases").append("<tr><td>" + purchase.describe + "</td><td>$ "
                                + purchase.amount + "</td><td>" + purchase.quantity
                                + "</td><td>$ " + purchase.totalCost() +"</td></tr>");
      });
    });
  });
  $("form#expenses").submit(function(event){
    event.preventDefault();
    var inputtedDescription = $("input#description").val();
    var inputtedAmount = parseInt($("input#amount").val());
    var inputtedQuantity = parseInt($("input#quantity").val());
    var newPurchase = Object.create(Purchase);
    newPurchase.describe = inputtedDescription;
    newPurchase.amount = inputtedAmount;
    newPurchase.quantity = inputtedQuantity;
    currentCategory.purchases.push(newPurchase);

    $("table#purchases").empty();
    currentCategory.purchases.forEach(function(purchase) {
      $("table#purchases").append("<tr><td>" + purchase.describe + "</td><td>$ "
                                + purchase.amount + "</td><td>" + purchase.quantity
                                + "</td><td>$ " + purchase.totalCost() +"</td></tr>");
    });

  });




});
