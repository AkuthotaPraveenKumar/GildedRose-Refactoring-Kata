var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose - Sulfurus", function () {
  it("Quality should not degrade on next day", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 2, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("SellIn should not alter  next day", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 2, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(2);
  });
});
