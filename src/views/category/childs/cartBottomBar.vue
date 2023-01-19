<!--  -->
<template>
    <div class="bottom-bar">
        <div class="check-content">
            <checkButtonImg class="check-button" :isChecked="isselectAll" @click.native="checkclick"></checkButtonImg>
            <span>全选</span>
        </div>

        <div class="totalprice">
            合计: {{totalprice}}
        </div>

        <div class="calculate">去计算{{shoplength}}</div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import checkButtonImg from 'components/content/checkButton/checkButtonImg.vue'


export default {
name: 'cartBottomBar',
//import引入的组件需要注入到对象中才能使用
components: {
    checkButtonImg
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    totalprice(){
        return '￥' + this.$store.state.cartList.filter(item => {
            return item.checked
        }).reduce((prevalue,item) => {
            return prevalue + item.price * item.count
s        },0)
    },

    shoplength(){
        return this.$store.state.cartList.filter(item => {
            return item.checked
        }).length
    },

    isselectAll(){
        return !(this.$store.state.cartList.filter(item => {
            return !item.checked
        }).length)
    },


},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        checkclick(){
        if(this.isselectAll){  //全部选中
            this.$store.state.cartList.forEach(item => {
                return item.checked = false
            });
        }else {
              this.$store.state.cartList.forEach(item => {
                return item.checked = true
            });
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

.bottom-bar {
    height: 40px;
    position: relative;
    background-color: #eee;
    display: flex;
    font-size: 12px;

}


.check-content{
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 70px;
}



.check-button {
    width: 22px;
    height: 22px;
}


.check-content span {
    margin-left: 5px;
}

.totalprice {
    text-align: center;
    line-height: 40px;
    margin-right: 20px;
    flex: 1;
}

.calculate{
    background-color: red;
    width: 90px;
    text-align: center;
    line-height: 40px;
}
</style>