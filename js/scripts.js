var Purchase = {
  totalCost: function() {
    return this.amount*this.quantity;
  }
}

$(document).ready(function(){
  $("form#expenses").submit(function(event){
    var inputtedDescription = $("input#description").val();
    var inputtedAmount = parseInt($("input#amount").val());
    var inputtedQuantity = parseInt($("input#quantity").val());
    var newPurchase = Object.create(Purchase);
    newPurchase.describe = inputtedDescription;
    newPurchase.amount = inputtedAmount;
    newPurchase.quantity = inputtedQuantity;

    $("table#purchases").append("<tr><td>" + newPurchase.describe + "</td><td>$ "
                                + newPurchase.amount + "</td><td>" + newPurchase.quantity
                                + "</td><td>$ " + newPurchase.totalCost() +"</td></tr>");


    event.preventDefault();
  });
});
