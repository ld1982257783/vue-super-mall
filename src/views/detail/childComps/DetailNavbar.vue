<!--  -->
<template>
<div>
    <nav-bar>
        <div slot="left" class="imgclass" @click="tittleclick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="navbarclass" @click="printindex">
            <div v-for="(item,index) in tittle" :key=index 
            class="itemclass" 
            :class="{active: activeindex === index}"
            @click="swapclass(index)">
            {{item}}
            </div>
        </div>
    </nav-bar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar
},
data() {
//这里存放数据
return {
    tittle: ['商品','参数','评论','推荐'],
    activeindex: 0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    swapclass(index){
        this.activeindex = index
    },

    tittleclick(){
        //下面三个方法都能实现  但是 go(-1)和back()性能更强  不卡顿
        //this.$router.push('/')
        //this.$router.go(-1)   
        this.$router.back()
    },

    printindex(){
        this.$emit('detailindex',this.activeindex)
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
.navbarclass {
    display: flex;
    font-size: 15px;
}

.itemclass {
    flex: 1;
}

.active {
    color: var(--color-high-text);
}

.imgclass img{
    margin-top: 11px;
}
</style>