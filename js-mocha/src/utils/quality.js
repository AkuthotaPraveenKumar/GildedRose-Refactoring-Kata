const qDegradeConfigs = require("../configs/degrades.json");
const defaultDegradeRate = 1;

const getNextDayQuality = (item, sellIn, quality) => {
  const rules = qDegradeConfigs[item];
  if (!rules) {
    // if item is not listed, default route
    const degrade =
      sellIn && sellIn > 0 ? defaultDegradeRate : 2 * defaultDegradeRate;
    return Math.max(0, quality - degrade);
  }
  for (let i = 0; i < rules.length; i++) {
    /*
          Order of processing 
          - Array index
          - fixed
          - DaysToSellIn validation
          - rate
        */
    const rule = rules[i];
    if (rule.fixed) return rule.fixedValue;
    if (
      (isNaN(rule.maxDaysToSellIn) || rule.maxDaysToSellIn >= sellIn) &&
      (isNaN(rule.minDaysToSellIn) || sellIn > rule.minDaysToSellIn)
    ) {
      const degrade = sellIn && sellIn > 0 ? rule.rate : 2 * rule.rate;
      return Math.min(Math.max(0, quality - degrade), 50);
    }
  }
  // reaching here would mean configuration error
  console.error("please check degrade configurations.");
};

module.exports = { getNextDayQuality };
