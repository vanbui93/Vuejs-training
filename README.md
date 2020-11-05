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

## Video 10 - ràng buộc class
Bản chất class cũng là 1 attribute, nên có thể sử dụng `v-bind` để ràng buộc<br>
Sử dụng cú pháp object `v-bind:class="objClass"`
```js
<div id="app">
    <div class="demo" v-bind:class="objClass">binding classes</div>

    <button v-on:click="changeActive">Change Active</button>
    <button v-on:click="changeError">Change Error</button>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            isActive: true,
            isError: false
        },
        methods: {
            changeActive(){
                this.isActive = !this.isActive
            },
            changeError(){
                this.isError = !this.isError
            }
        },
        computed: {
            objClass: function() {
                return {
                    active: this.isActive, 
                    error: this.isError
                }
            }
        },
    })
</script>

```

## Video 11 - ràng buộc style cho phần tử

Cú pháp `v-bind:style`<br>
Có nhiều cách để khai báo và sử dụng style

### Sử dụng cú pháp object
- Cách 1: viết trực tiếp
```js
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', marginTop: '20px'}">
    text style bind style
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            activeColor: 'red',
            fontSize: 20
        }
    })
</script>
```
- Cách 2: bind vào 1 object

```js
<div v-bind:style="{background: background}">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', marginTop: '20px'}">
        text style bind style
    </div>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            activeColor: 'red',
            fontSize: 20,
            bg: 'https://kinhbacweb.com/wp-content/uploads/2020/03/tong-hop-cac-mau-background-dep-nhat-10070.jpg',
        },
        computed: {
            background(){
                return 'url('+ this.bg +') no-repeat';
            },
        },
    })
</script>
```

- Cách 3: gọi object từ computed nhìn đỡ rối mắt hơn
```js
<div v-bind:style="objectStyle">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', marginTop: '20px'}">
        text style bind style
    </div>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            activeColor: 'red',
            fontSize: 20,
            bg: 'https://kinhbacweb.com/wp-content/uploads/2020/03/tong-hop-cac-mau-background-dep-nhat-10070.jpg',
        },
        computed: {
            objectStyle(){
                return {
                    background: 'url('+ this.bg +') no-repeat', 
                    height: '100vh'
                }
            }
        },
    })
</script>
```

### Sử dụng cú pháp mãng
```js
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

## Video 12 - Render theo điều kiện
- Sử dụng cú pháp v-if

```js
<div id="app">
    <ul class="tab">
        <li v-on:click="changeTabs('login')">Đăng nhập</li>
        <li v-on:click="changeTabs('regist')">Đăng kí</li>
    </ul>
    <div class="login" v-if="tabSelected==='login'">
        <h3>Đăng nhập</h3>
        // do somethings
    </div>
    <div class="regist" v-else-if="tabSelected==='regist'">
        <h3>Đăng kí</h3>
        // do somethings
    </div>
</div>

<script>
var app = new Vue({
    el: '#app',
    data: {
        tabSelected: 'login'
    },
    methods: {
        changeTabs(tab){
            this.tabSelected = tab;
        }  
    },
})
</script>
```

- Sử dụng cú pháp v-show, cách dùng tương tự v-if nhưng v-show sẽ luôn luôn được render<br>
v-show sử dụng thuộc tính `display:none` để ẩn phẩn tử

```js
<div class="login" v-show="tabSelected==='login'">
    <h3>Đăng nhập</h3>
    // do somethings
</div>
<div class="regist" v-show="tabSelected==='regist'">
    <h3>Đăng kí</h3>
    // do somethings
</div>
```

## Video 13 - Render danh sách kiến thức vòng lặp v-for

- sử dụng v-for để lặp 1 mãng
```js
<div class="col-4 blog" v-for="item in listBlogs">
    <h4 class="title">{{item.title}}</h4>
    <div class="description">{{item.body}}</div>
</div>
```
- Nếu muốn lấy `key` ra

```js
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```


## Video 14: Lưu ý về sử dụng vòng lặp for
- `v-for` dùng với `v-if`
Khi được dùng trên dùng một node, v-for có độ ưu tiên cao hơn v-if<br>
ví dụ dưới đây lấy danh sách những todo không phải là isComplete
```js
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

Ví dụ dưới: lọc danh sách những user có trạng thái isActive

```js
<li class="user" v-for="user in arrUser" v-if="user.isActive">
    {{user.email}}
</li>
```

- `v-for` và `filter`
dùng 1 hàm **userActive** để filter user ra, sau đó for trên **userActive**
```js
 <li class="user" v-for="user in userActive">{{user.email}}</li>

 computed: {
    userActive(){
        return this.arrUser.filter(function(u){
            return u.isActive;
        })
    }
},
```