describe("Purchase", function() {
  describe("totalCost", function() {
    it("calculates the total amount spent for an item purchase", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.amount = 10;
      testPurchase.quantity = 10;
      testPurchase.totalCost().should.equal(100);
    });
  });
});
