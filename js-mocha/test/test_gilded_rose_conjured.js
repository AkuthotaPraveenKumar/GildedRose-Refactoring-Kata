var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose - Conjured Mana Cake", function () {
  it("Quality should increase by 2", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 11, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });
  it("Quality should increase by 4 after expiry", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });
});
