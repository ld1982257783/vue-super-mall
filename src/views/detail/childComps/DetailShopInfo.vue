<!--  -->
<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>

        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sells-count">
                        {{shop.sells | sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">
                        {{shop.goodsCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            
            <div class="shop-middle-item shop-middle-right">
                <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more' : item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-item">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'DetailShopInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    shop:{
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
filters: {
    sellCountFilter: function(value){
        if(value < 10000) return value;
        return (value/10000).toFixed(1)+'万'
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

.shop-info {
    padding: 25px, 8px;
    border-bottom: 5px solid #f2f5f8;

}

.shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
    margin-left: 6px;
    margin-top: 6px;
}

.shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1)
}

.shop-top .title{
    margin-left: 10px;
    vertical-align: center;

}


.shop-middle {
    margin-top: 15px;
    margin-left: 15px;
    display: flex;
    align-items: center;
}

.shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
}

.sells-count .goods-count {
    font-size: 18px;

}

.sells-text .goods-text {
    margin-top: 10px;
    font-size: 12px;

}

.shop-middle-right {
    font: size 13px;
    color: #333;
}

.shop-middle-right table {
    width: 120px;
    margin-left: 30px;
}

.shop-middle-right table td {
    padding: 5px 0;
}


.shop-middle-right .store {
    color: #5ea730;
}

.shop-middle-right .store-better {
    color: #f13e3a;

}


.shop-middle-right .better span{
    background-color: #5ea732;
    color:#fff;
    text-align: center;
}


.shop-middle-right .better-more span {
    background-color: #f13e2a;
}


.enter-shop {
    margin-top: 8px;
    font-size: 18px;
    color: var(--color-high-text);
    text-align: center;
    padding-bottom: 8px;
    background-color: #fff;
}

.info-goods {
    padding-right: 13px;
    margin-left: 13px;
}

</style>