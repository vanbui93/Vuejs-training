var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam đẹp thời trang fashion',
        url: 'https://www.sendo.vn/ao-thun-nam-tay-ngan-ao-thun-nam-tay-ngan-25151920.html/',
        target: '_blank',
        price: 20000,
        sale: 0.3,
        selectedColor: 0,
        listProductDetail: [
            {
                image:'https://cf.shopee.vn/file/c4a4127d8981602aa44ccf7c1714dc61_tn',
                quantity: 8,
                variant: 'Màu đen'
            },
            {
                image:'https://cf.shopee.vn/file/3a28417b00b6503b41b5c1512497a007_tn',
                quantity: 0,
                variant: 'Màu vàng'
            },
            {
                image:'https://cf.shopee.vn/file/a7234c58083748f0f4b980e56c8ee7ed_tn',
                quantity: 2,
                variant: 'Màu trắng'
            }
        ]
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedColor = index;
        },
        classActive(index) {
            return {
                active: this.selectedColor === index
            }
        }
    },
    computed: {
        formatOriginalPrice(){
            const number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        formatFinalPrice(){
            let number = this.price - this.sale*this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        getProduct(){
            let index = this.selectedColor;
            return this.listProductDetail[index];
        }
    },
});