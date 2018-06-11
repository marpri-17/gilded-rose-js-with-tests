
const Item = require('./Item');

const LEGENDARY_ITEM = "Sulfuras, Hand of Ragnaros";
const CONJURED_ITEM = "Conjured";

const isSpecialItem = item => item.name === "Aged Brie" || item.name === "Backstage passes to a TAFKAL80ETC concert";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const DAYS_TO_DOUBLE_QUALITY = 10;
const DAYS_TO_TRIPLE_QUALITY = 5;

class GildedRose {

  incrementQuality(item, quantity = 1){
    if(item.quality + quantity < MAX_QUALITY){
      item.quality += quantity;
    }else{
      item.quality = MAX_QUALITY;
    }
  }

  decrementQuality(item){
    if(item.quality > MIN_QUALITY){
      item.quality -= 1;
    }
  }

  updateSpecialItemQuality(item){
    if (item.sellIn <= DAYS_TO_TRIPLE_QUALITY){
      this.incrementQuality(item, 3);
    } else if (item.sellIn <= DAYS_TO_DOUBLE_QUALITY) {
      this.incrementQuality(item, 2);
    } else {
      this.incrementQuality(item);
    }

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateRegularItemQuality(item){
    this.decrementQuality(item);
    if (item.sellIn < 0) {
      this.decrementQuality(item);
    }
  }

  updateConjuredItem(item){
    this.updateRegularItemQuality(item);
    this.updateRegularItemQuality(item);
  }

  updateItemQuality(item){
    if(item.name === LEGENDARY_ITEM) return;

    item.sellIn -= 1;

    if (isSpecialItem(item)) {
      this.updateSpecialItemQuality(item);
    } else if(item.name === CONJURED_ITEM){
      this.updateConjuredItem(item);
    } else {
      this.updateRegularItemQuality(item);
    }

  }

  updateQuality(items) {
    for (let i = 0; i < items.length; i++) {
      this.updateItemQuality(items[i]);
    }
    return items;
  }

}

module.exports = new GildedRose();
