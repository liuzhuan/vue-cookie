# liuz-vue-cookie

本仓库 fork 自 [alfhen/vue-cookie][vue-cookie]。由于 `vue-cookie@1.1.4` 在 `<script>` 中直接嵌入会有[问题][issue]，所以重新使用 webpack 编译了一版。

## 使用方法

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
<script src="https://unpkg.com/liuz-vue-cookie@0.0.1/dist/vue-cookie.js"></script>
<script>
    /** 这句目前必须要加 */
    Vue.use(VueCookie)
  
    var vm = new Vue({
        el: '#page-wrapper',
        data: {
          answer: 42
        },
        created: function(){
            console.log('token: ' + this.$cookie.get('token'))
            this.$cookie.set('token', '1234')
        }
    })
</script>
```

查看[线上演示][demo]

[vue-cookie]: https://github.com/alfhen/vue-cookie
[demo]: http://jsbin.com/yidijakeza/edit?html,js,console,output
[issue]: https://github.com/alfhen/vue-cookie/issues/24