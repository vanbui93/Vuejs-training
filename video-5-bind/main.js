var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam đẹp thời trang fashion',
        url: 'https://www.sendo.vn/ao-thun-nam-tay-ngan-ao-thun-nam-tay-ngan-25151920.html/',
        target: '_blank',
        price: 10000
    },
    methods: {
        formatPrice(){
            const number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        }
    },
});