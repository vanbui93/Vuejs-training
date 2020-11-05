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

## Video 15 - Lưu ý quan trọng về array và object
- Thêm 1 phần tử vào mãng
Muốn thêm 1 phần tử vào trong mãng, cần theo cú pháp hệ thống của vuejs
`app.$set(target, key, number)`
target: array<br>
key: index<br>
number: new value

## Video 17 & 19 - bài tập thực tế
- Video 19: thay đổi color khi người dùng handleClick change color

```js
<b-row>
    <b-col cols="2">{{getProduct.variant}}</b-col>
    <b-col cols="10" class="img-thumnail">
        <b-list-group horizontal>
            <b-list-group-item 
                v-for="(item,index) in listProductDetail"
                v-on:click="handleClickColor($event,index)"
            >
                <img v-bind:src="item.image" width="50" v-bind:alt="item.variant">
            </b-list-group-item>
        </b-list-group>
    </b-col>
</b-row>

<script>
data: {
    selectedColor: 0
},
methods: {
    handleClickColor(e, index) {
        this.selectedColor = index;
    }
},
computed: {
    getProduct(){
        let index = this.selectedColor;
        return this.listProductDetail[index];
    }
}
</script>
```

- Change class active
Kiểm tra nếu `this.selectedColor === index` thì sẽ add class `active`

```js
 <b-list-group-item 
    v-for="(item,index) in listProductDetail"
    v-bind:class="classActive(index)"
    v-bind:key="index"
>
    <img v-bind:src="item.image" width="50" v-bind:alt="item.variant">
</b-list-group-item>

<script>
 methods: {
    classActive(index) {
        return {
            active: this.selectedColor === index
        }
    }
}
</script>
```

## Video 21 - Giới thiệu và cài đặt Vue CLI
- Để áp dụng ở 1 ứng dụng lớn hơn, nên sử dụng SPA - single page aplication
- 1 trang web được chia nhiều thành phần component<br>
mỗi thành phần được quản lý bởi đối tượng Vue
- **CLI** Command line interface
tìm từ khóa **vuejs template webpack**

```sh
$ npm install -g @vue/cli  //cài đặt vue global, có thể install bất kì nơi đâu trong máy tính
$ vue init webpack my-project  //cài đặt webpack để đóng gói ứng dụng
$ cd my-project
$ npm install  //cài đặt node js
$ npm run dev //chạy lên
```

## Video 25 - Cài đặt mã nguồn và tổ chức các component lồng nhau
- Trong 1 website sẽ có nhiều component được tổ chức dưới dạng 


└──App<br>
|   ---Header<br>
|   ---ListUser<br>
|   ---Footer<br>

```js
<template>
  <div id="app">
    <comp-header/>
     <list-user/>
    <comp-footer/>   
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'
import ListUser from './components/ListUser'
import CompFooter from './components/CompFooter'

export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter,
    ListUser,
  }
}
</script>
```

## Video 26 - Tìm hiểu props down
- Truyền props từ component cha vào component con
- Cú pháp giống thuộc tính, ràng buộc thuộc tính, sử dụng `v-bind` để Vue biết đó là 1 biến <br>
`<comp-header v-bind:titleHeader="title"/>`<br>

Ví dụ dưới: truyền `title` từ app.vue vào trong CompHeader.vue  thông qua props `titleHeader`
```js
// App.vue

<comp-header v-bind:titleHeader="title"/>
    <list-user/>
<comp-footer/>

export default {
    name: 'App',
    data() {
        return {
        title: "Hello props - đã truyền thành công"
        }
    },
}
```

```js
// CompHeader.vue

<header>
    <h2>{{titleHeader}}</h2>
</header>

export default {
    name: 'comp-header',
    props: {
        titleHeader: String
    }
}
```