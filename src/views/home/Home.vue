<!--  -->
<template>
<div class="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
     <tab-control 
            class="tabcontrolclass" 
            :tittle="['流行','新款','精选']" 
            @getindex="getindex2" 
            ref="tabcontrol11"
            v-show="isTabFixed"
            ></tab-control>
    <scroll 
    class="content" 
    ref="scroll" 
    :probeType="3" 
    @scroll="getposition"
    :pullUpLoad="true"
    @pullUpLoad="loadMore"
    >
            <home-swiper :banners="banners" @swiperImgLoad="imageLoad"></home-swiper>
            <recommend-views :recommends="recommends"></recommend-views>
            <featureView></featureView>
            <tab-control 
            :tittle="['流行','新款','精选']" 
            @getindex="getindex2" 
            ref="tabcontrol2"
            ></tab-control>
            <good-list :goods="showdata"></good-list>
    </scroll>
    <back-top @click.native="backtopscroll" v-show="isshowimg"></back-top>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from 'components/content/goods/goodList.vue'
import scroll from 'components/common/scroll/scroll.vue'
import backTop from 'components/content/backTop/backTop.vue'
import {debounce} from 'common/utils.js'


import HomeSwiper from './ChildSwap/HomeSwiper.vue'
import RecommendViews from './ChildSwap/RecommendViews.vue'
import featureView from './ChildSwap/FeatureView.vue'


import {getHomeMultidata,getHomeGoods} from 'network/home.js'

//导入混入函数  事件总线 
import {itemListenerMixin} from 'common/mixin.js'





export default {
name: 'home',
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    featureView,
    TabControl,
    GoodList,
    scroll,
    backTop
},
mixins: [itemListenerMixin],
data() {
//这里存放数据
return {
    banners: [],
    recommends: [],  
    goods:{  //请求的数据模型 
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page:0,list:[]}
    },

    currentindex: 'pop',
    isshowimg: false,
    offsetTop: 0,
    isTabFixed: null,     // 判断是否吸顶
    saveY: 0,   //记录离开时的位置 
};
},
//监听属性 类似于data概念
computed: {
    showdata(){
        return this.goods[this.currentindex].list
    }
},
//监控data中的数据变化
watch: {},
//方法集合

//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


},
methods: {

    // 获取index的方法  
    getindex2(index){
        console.log(index)

        switch(index){
            case 0: 
                this.currentindex = 'pop'
                break;
            case 1: 
                this.currentindex = 'new'
                break;
            case 2: 
                this.currentindex = 'sell'
                break;
        }
        this.$refs.tabcontrol2.activeCurrent = index
        this.$refs.tabcontrol11.activeCurrent = index
    },


    getHomeMultidata(){
            getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
    })
    },

    getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res2 => {
        console.log(res2)
        this.goods[type].list.push(...res2.data.list)
        this.goods[type].page += 1

        //下拉加载数据请求完毕后需要 调用加载完成函数  才能进行下一次下拉加载更多
        this.$refs.scroll.getfinishdata()
    })
    },


    //@click.native 如果想要监听组件原生的属性  就需要使用native
    backtopscroll(){
        this.$refs.scroll.getscrollTo(0,0,500)
    },


    //获取scroll组件传来的位置 
    getposition(position){
        //console.log(position)    判断图片是否展示  
        this.isshowimg = Math.abs(position.y) > 1000

        //判断tabcontrol是否吸顶  
        this.isTabFixed = Math.abs(position.y) > this.offsetTop
    },


    //获取更多数据 
    loadMore(){
        console.log('上拉加载更多')
        this.getHomeGoods(this.currentindex)
    },

    //如果要实现吸顶效果 这个时候就需要获取tabControl的OffsetTop
    //但是 如果直接在mounted中获取tabcontrol的offsettop  那么值是不正确的  因为图片此时还没记载
    //如何获取正确的值了   监听图片记载完成
    imageLoad(){
        //console.log(this.$refs.tabcontrol2.$el.offsetTop)
        this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop

    }



},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {
    //页面销魂是   取消全局组件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
}, //生命周期 - 销毁完成
activated() {
    //console.log('缓存生效')
    //页面活跃的时候  再重新跳转回来 
    this.$refs.scroll.getscrollTo(0,this.saveY,0)
    //刷新
    this.$refs.scroll.refresh()

}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {
    //console.log('缓存消失')
     this.saveY = this.$refs.scroll.getsaveY()
},
}
</script>
<style scoped>
.home{
    height: 100vh;
    position: relative;
}

.home-nav{
    background-color: var(--color-tint);
    color: white;

    /* 如下属性是浏览器实现原生滚动时，为了防止导航跟随一起滚动  所有设置fixed属性 */
    position: fixed;
    left: 0;
    right: 0%;
    top: 0;
    z-index: 9;

}

.tabcontrolclass{
    /* 该属性已失效 */
    position: relative;
    top: 40px;
    z-index: 9;
}

.content {
    overflow: hidden;
    position: absolute;
    top: 44px; 
    bottom: 49px;
    
}


</style>