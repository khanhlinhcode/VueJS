var vueInstance = new Vue({
  el: "#app",
  data: {
    title: "quần nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
    url: "https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6",
    target: "_blank",
    mainPrice: "22000 ",
    price: "12000 ",
    check: true,
    brand: "adias",
  },
  methods: {
    fomatPrice() {
      var number = this.price;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
  },
});
