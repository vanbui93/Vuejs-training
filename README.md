# Vuejs-training
1. Tìm hiểu Vuejs là gì ?
cú pháp
```sh
var vm = new Vue({
  // các tùy chọn
})
```
2. Các khái niệm cơ bản.
## Video 5 - tìm hiểu về ràng buộc dữ liệu bind
sử dụng `v-bind`

```js
<h3 class="title">
    <a v-bind:href="url" v-bind:target="target">{{title}}</a>
</h3>

var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam đẹp thời trang fashion',
        url: 'https://www.sendo.vn/ao-thun-nam-tay-ngan-ao-thun-nam-tay-ngan-25151920.html/',
        target: '_blank'
    },
});
```
## Video 6 - Xử lý sự kiện event
- Event handling : click, hover, active
sử dụng `v-on`

- Sử dụng event kết hợp với tham số truyền vào `handleClickEvent($event, 5)` <br>
để khai báo event sử dụng `$event`

```js
<div id="app">
     <button v-on:click="handleClickEvent($event, 5)">Click and event</button>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            counterevent: 0,
        },
        methods: {
            handleClickEvent(e, number) {
                console.log('click', e); //event
                console.log('this', this); //đối tượng vue
                
                this.counterevent +=number;
            }
        },
    })
</script>
```

## Video 7 - Cách sử dụng event modifiers.
