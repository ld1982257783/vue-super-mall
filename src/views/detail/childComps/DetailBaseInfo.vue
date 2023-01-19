<!--  -->
<template>
    <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
        <div class="info-tittle">{{goodsInfo.tittle}}</div>
        <div class="info-price">
            <span class="n-price">{{goodsInfo.newPrice}}</span>
            <span class="o-price">{{goodsInfo.oldPrice}}</span>
            <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
        </div>

        <div class="info-other">
            <span>{{goodsInfo.columns[0]}}</span>
            <span>{{goodsInfo.columns[1]}}</span>
            <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
        </div>

        <div class="info-service">
            <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
                <img :src="goodsInfo.services[index-1].icon" alt="">
                <span>{{goodsInfo.services[index-1].name}}</span>
            </span>
        </div>

    </div>
    
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'DetailBaseInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    goodsInfo:{
        type: Object,
        default (){
            return {}
        }
    }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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


.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f2f8;
}

.info-tittle {
    color: #222;

}

.info-price {
    margin-top: 10px;
}

.info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
}

.info-price .o-price {
    font-size: 13px;
    margin-top: 5px;
    text-decoration: line-through;
}

.info-price .discount {
    font-size: 18px;
     padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px; 
    
}

.info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between; 
}


.info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}

.info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}


.info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}

.top-service-item span {
    font-size: 13px;
    color: #333;
}



</style>