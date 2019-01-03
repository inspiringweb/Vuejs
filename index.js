var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "vmSocks-green.jpg",
    alttext: "Green sock",
    title: "Green sock",
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "vmSocks-green.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "vmSocks-blue.jpg"
      }
    ],
    sizesArr: ["X", "XL", "XXL"],
    zafarqwe: ["Zafarchik", "Zafarjon", "Zafarbek", "Zappishka"],
    person: {
      firstName: "Zafar",
      lastName: "Bekliev",
      age: 26
    },
    cart: 0,
    minus1: 100
  },

  methods: {
    addtocart: function() {
      this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    },
    minus: function() {
      this.minus1 -= 1;
    }
  }
});
