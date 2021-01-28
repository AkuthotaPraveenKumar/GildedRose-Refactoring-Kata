const sellInReductionConfigs = require("../configs/sellInReductions.json");
const defaultSellInReduction = 1;

const getNextDaySellIm = (item, sellIn) => {
  const rules = sellInReductionConfigs[item];
  if (!rules) {
    // if item is not listed, default route
    return sellIn - defaultSellInReduction;
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
      (!rule.maxDaysToSellIn || rule.maxDaysToSellIn >= sellIn) &&
      (!rule.minDaysToSellIn || rule.minDaysToSellIn > sellIn)
    ) {
      return sellIn - rule.rate;
    }
  }
  // reaching here would mean configuration error
  console.error("please check degrade configurations.");
};

module.exports = { getNextDaySellIm };
