# Vuejs-training
1. Tìm hiểu Vuejs là gì ?
Vue là ứng dụng web SPA - Single page aplication
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
Vue cung cấp sẳn các xử lý event 
- .stop - e.stopPropagation()
- .prevent - event.preventdefault()
- .capture
- .self
- .once
ví dụ<br>

```js
<a v-on:click.stop="doThis"></a>

<form v-on:submit.prevent="onSubmit"></form>

<!-- ta có thể nối modifier với nhau -->
<a v-on:click.stop.prevent="doThat"></a>
```

## Video 8 - Tìm hiểu về computed
Computed ko cần lời gọi hàm dấu **()**<br>
vd ko cần reverseMessage() mà gọi trực tiếp **reverseMessage**<br>

So sánh computed và methods: <br>
- mặc dù **computed** được khai báo như 1 hàm nhưng khi gọi sử dụng thì ko phải là 1 hàm<br>
nó được sử dụng để khai báo trong vue<br>Khi được gọi tới thì chỉ chạy mình nó (cái được gọi)<br>
giúp cho trang web nhanh hơn.
- **methods** được khai báo và sử dụng như 1 hàm<br>
Khi được gọi thì sẽ render lại toàn bộ trang và chạy hết tất cả các hàm
```js
<p>reverseMessageMethod(): {{reverseMessageMethod()}}</p>
<p>reverseMessage - Computed ko cần lời gọi hàm: {{reverseMessage}}</p>

var app = new Vue({
        el: '#app',
        data: {
            message: 'hello word'
        },
        methods: {
            reverseMessageMethod() {
                return this.message.split('').reverse().join('');
            }
        },
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('');
            }
        },
    })
``` 

## Video 9 - ràng buộc dữ liệu 2 chiều

Vuejs cung cấp sẳn 1 chỉ thị directive v-model để thao tác nhanh hơn

- Cách viết thông thường
```js
<div id="app">
    <h1>FirstName = {{firstName}}</h1>
    <input v-on:keyup="handleKeyUp" type="text" placeholder="Nhập firstName">
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            firstName:''
        },
        methods: {
            handleKeyUp(e){
                console.log(e.target.value);
                this.firstName = e.target.value;
            }
        },
    })
</script>

- Viết theo v-model
```js
<div id="app">
    <h1>FirstName = {{firstName}}</h1>
    <input v-model="firstName" type="text" placeholder="Nhập firstName">
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            firstName:''
        },
        methods: {
        },
    })
</script>
```