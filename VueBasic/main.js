var vueInstance = new Vue({
  el: "#app",
  data: {
    title: "quần nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
    url: "https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6",
    target: "_blank",
    Price: "22000 ",
    sale: 0.5,
    listProductDetail: [
       
    ]
  },
  methods: {
    fomatPrice() {
      var number = this.Price;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
  },
});
