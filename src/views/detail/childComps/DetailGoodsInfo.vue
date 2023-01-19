<!--  -->
<template>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
        <div class="info-desc clear-fix">
            <div class="start">
            </div>
            <div class="desc">新款上市</div>
            <div class="end"></div>
        </div>

        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item,index) in detailInfo.detailImage[0].list" :key=index :src="item" alt="" @load="imageLoad">
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'DetailGoodsInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    detailInfo: {
        type: Object,
        default (){
            return {}
        }
    }
},
data() {
//这里存放数据
return {
    counter: 0,
    imagesLength: 0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
    detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
},
//方法集合
methods: {

    imageLoad(){
        if(++this.counter == this.imagesLength){
            this.$emit('imageLoad')
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
.desc {
    margin-left: 30px;
    padding-top: 13px;
    padding-bottom: 5px;
    color:red;
}

.info-key {
    margin-left: 70%;
    padding-top: 5px;
    padding-bottom: 13px;
    color: rgb(255, 136, 0);
}


.info-list img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

</style>