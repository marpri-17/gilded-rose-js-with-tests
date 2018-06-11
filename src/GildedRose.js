
const Item = require('./Item');

class GildedRose {

  increaseQuality(item){
    if(item.quality < 50){
      item.quality += 1;
    }
  }

  decreaseQuality(item){
    if(item.quality > 0){
      item.quality -= 1;
    }
  }

  updateSpecialItemQuality(item){
    if (item.sellIn < 0) {
      item.quality = 0
    }else{
      this.increaseQuality(item)
      if (item.sellIn < 11) {
        this.increaseQuality(item)
      }
      if (item.sellIn < 6) {
        this.increaseQuality(item)
      }
    }
  }

  updateRegularItemQuality(item){
    this.decreaseQuality(item)
    if(item.name === "Conjured"){
      this.decreaseQuality(item)
    }

    if (item.sellIn < 0) {
      this.decreaseQuality(item)
      if(item.name === "Conjured"){
        this.decreaseQuality(item)
      }
    }
  }

  updateItemQuality(item){
    if (item.name === "Sulfuras, Hand of Ragnaros") return;

    item.sellIn = item.sellIn - 1;

    if (item.name === "Aged Brie" || item.name === "Backstage passes to a TAFKAL80ETC concert"){
      this.updateSpecialItemQuality(item);
    }else{
      this.updateRegularItemQuality(item);
    }
  }

  updateQuality(items) {
    items.map(item => this.updateItemQuality(item))

    return items
  }

}

module.exports = new GildedRose();
