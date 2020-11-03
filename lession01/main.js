var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'dien thoai samsung'
    },
    methods: {
        say: function(txt) {
            return 'Hello ' + txt;
        }
    }
});

console.log(vueInstance);

//hệ thống phản ứng, sẽ thay đổi title sau 3s
setTimeout(() => {
    vueInstance.title="Điện thoại Iphone 12"
}, 3000);