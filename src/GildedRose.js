/*
    2006-30-84
    Leeroy was here!!

    Leeroy <lerooy@example.com>
*/

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

  updateItemQuality(item){

    if (item.name === "Sulfuras, Hand of Ragnaros") return;

    item.sellIn = item.sellIn - 1;

    if (item.name === "Aged Brie" || item.name === "Backstage passes to a TAFKAL80ETC concert"){
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
      return;
    }


    this.decreaseQuality(item)

    if (item.sellIn < 0) {
      this.decreaseQuality(item)
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
