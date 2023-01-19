<!--  -->
<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">
                更多
                <i class="arrow-right"></i>
            </div>
        </div>

        <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>

        <div class="info-detail">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{commentInfo.content}}</p>
            <div class="info-other">
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img v-for="(item,index) in commentInfo.images" :key=index :src="item" alt="">
            </div>
        </div>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {formatDate} from '../../../common/utils'


export default {
name: 'DetailCommentInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    commentInfo: {
        type: Object,
        default (){

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
    showDate(value){
        const date = new Date(value * 1000);
        //将date转换为格式化
        return formatDate(date,'yyyy-MM-dd')
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

.info-header {
    display: flex;
    padding-top: 10px;
    flex-wrap: wrap;
    /* 图片均等分 */
    justify-content: space-around;
}


.header-more {
    margin-left: 55%;
}




.info-imgs img{
    width: 30%;
    height: 35%;
    border-radius: 5px;
    padding: 10px 10px;
}

.info-user{
    line-height: 45px;
    display: flex;
    align-items: center;
    margin-left: 6px;
    margin-top: 11px;
}
.info-user span {
    margin-left: 10px;
    vertical-align: center;
}

.info-user img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1)
}



.info-detail p{
    margin-top: 10px;
    margin-bottom: 6px;
    margin-left: 5px;
}

.info-detail .info-other{
    margin-left: 10px;
}
</style>