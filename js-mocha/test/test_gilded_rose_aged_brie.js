var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose - Aged Brie", function () {
  it("Should increase quality by 1 on next day", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it("Should increase quality by 2 after sellIn day", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it("Should not increase quality beyond 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 6, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
});
