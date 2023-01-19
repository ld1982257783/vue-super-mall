<!--  -->
<template>
<div class="tabcontrol">
    <div v-for="(item,index) in tittle"  :key = index class="control"
    :class="{active: index == activeCurrent}" @click="changeindex(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
props: {
    tittle: {
        type: Array,
        default(){
            return []
        }
    }
},
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    activeCurrent: 0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    changeindex(index){
        this.activeCurrent = index;
        this.$emit('getindex',index)
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
.tabcontrol {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: white;
}

.control {
    flex: 1;
    height: 40px;
    line-height: 40px;
    box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2);

}

.control span {
    padding: 5px;

}


.active{
    color: var(--color-high-text);
}

.active span{
    border-bottom: 3px solid var(--color-tint);

}

</style>