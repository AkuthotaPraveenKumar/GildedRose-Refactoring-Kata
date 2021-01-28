const { getNextDayQuality } = require("./utils/quality");
const { getNextDaySellIm } = require("./utils/sellIn");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].quality = getNextDayQuality(
        this.items[i].name,
        this.items[i].sellIn,
        this.items[i].quality
      );
      this.items[i].sellIn = getNextDaySellIm(
        this.items[i].name,
        this.items[i].sellIn
      );
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
