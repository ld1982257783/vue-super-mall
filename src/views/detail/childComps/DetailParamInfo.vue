<!--  -->
<template>
    <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
        <table v-for="(item,index) in paramsInfo.sizes" :key=index class="info-size">
            <tr v-for="(tr,indey) in item" :key=indey>
                <td v-for="(td,indez) in tr" :key=indez>
                    {{td}}
                </td>
            </tr>
        </table>

        <table class="info-param">
            <tr v-for="(info,index) in paramsInfo.infos" :key="index">
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>

        <div class="info-img" v-if="paramsInfo.image.length !== 0">
            <img :src="paramsInfo.image" alt="">
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'DetailParamInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    paramsInfo: {
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

.param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}

.param-info table {
    width: 100%;
    border-collapse: collapse;
}

.param-info table tr{
    height: 42px;
}

.param-info table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.info-param-key {
    width: 95px;
}

.info-param {
    border-top: 1px solid rgba(100, 100, 100, .1);
}

.param-value {
    color: #eb4868;

}

.info-img {
    width: 100%;
}
</style>