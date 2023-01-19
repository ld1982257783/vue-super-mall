<!--  -->
<template>
<div class=".wraper" ref="pubScroll">
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscroll from 'better-scroll'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
    probeType: {
    type: Number,
    default(){
        return 0
    }
    },
    pullUpLoad: {
    type: Boolean,
    default(){
        return false
    }
    }
},
data() {
//这里存放数据
return {
    scroll: null
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getscrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
    },

    //获取多次加载更多 
    getfinishdata(){
        this.scroll && this.scroll.finishPullUp()
    },

    //刷新scroll
    refresh(){
        //console.log('----')
        this.scroll && this.scroll.refresh()
    },


    //获取离开时的位置 
    getsaveY(){
        return this.scroll ? this.scroll.y : 0
    }

    
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.scroll = new Bscroll(this.$refs.pubScroll,{
        probeType:this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
    })

    //实时监听滚动的位置 
    if(this.probeType === 2 || this.probeType ===3 ){
        this.scroll.on('scroll',(position) => {
        //console.log(position)
        //将实时位置发送出去  谁用谁取
        this.$emit('scroll',position)
    })
    
    }

    //设置上拉加载更多数据 
    this.scroll.on('pullingUp',() => {
        //console.log("设置上拉加载更多数据")
        this.$emit('pullUpLoad')
    })


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

</style>