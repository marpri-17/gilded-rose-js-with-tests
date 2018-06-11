/*
    2006-30-84
    Leeroy was here!!

    Leeroy <lerooy@example.com>
*/

const Item = require('./Item');

class GildedRose {
  updateQuality(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name !== "Aged Brie" &&  items[i].name !== "Backstage passes to a TAFKAL80ETC concert" && "Sulfuras, Hand of Ragnaros" != items[i].name && items[i].quality > 0) {
        items[i].quality = items[i].quality - 1
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].name === "Aged Brie" || items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sellIn < 11) {
              items[i].quality = items[i].quality + 1
            }
            if (items[i].sellIn < 6) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
      if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
        items[i].sellIn = items[i].sellIn - 1;
      }
      if (items[i].sellIn < 0) {
        if (items[i].name !== "Aged Brie") {
          if ("Backstage passes to a TAFKAL80ETC concert" != items[i].name) {
            if (items[i].quality > 0) {
              if ("Sulfuras, Hand of Ragnaros" != items[i].name) {
                items[i].quality = items[i].quality - 1
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
          items[i].quality = 0;
        }
      }
      if ("Sulfuras, Hand of Ragnaros" != items[i].name)
        if (items[i].quality > 50) items[i].quality = 50;
    }
    return items;
  }

}

module.exports = new GildedRose();
