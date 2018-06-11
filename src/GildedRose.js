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
  updateQuality(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name !== "Sulfuras, Hand of Ragnaros"){

        items[i].sellIn = items[i].sellIn - 1;

        if (items[i].name !== "Aged Brie" &&  items[i].name !== "Backstage passes to a TAFKAL80ETC concert") {
            this.decreaseQuality(items[i])
          } else {
            this.increaseQuality(items[i])
            if (items[i].name === "Aged Brie" || items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
              if (items[i].sellIn < 11) {
                this.increaseQuality(items[i])
              }
              if (items[i].sellIn < 6) {
                this.increaseQuality(items[i])
              }
            }
          }


          if (items[i].sellIn < 0) {
            if (items[i].name !== "Aged Brie") {
              if ("Backstage passes to a TAFKAL80ETC concert" != items[i].name) {
                if (items[i].quality > 0) {
                  if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
                    this.decreaseQuality(items[i])
                  }
                }
              } else {
                items[i].quality = 0
              }
            } else {
              items[i].quality = 0
            }
          }
        }
      }

    return items;
  }

}

module.exports = new GildedRose();
