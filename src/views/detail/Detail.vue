<!--  -->
<template>
<div class="detail">
    <DetailNavbar class="detailNav" @detailindex="detailindex" ref="navbar"></DetailNavbar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
            <detail-swiper :topimages="toppimages"></detail-swiper>
            <detail-base-info :goodsInfo="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-parma-info :paramsInfo="paramsInfo" ref="param"></detail-parma-info>
            <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
            <good-list :goods="recommends" class="goodrecommends" ref="recommends"></good-list>
    </scroll>
    <back-top @click.native="backtopscroll" v-show="isshowing"></back-top>
    <detail-bottom-bar @addcart="addcartparent"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavbar from 'views/detail/childComps/DetailNavbar.vue'
import {getDetail,Goods,shop,GoodsParam,getRecommend} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParmaInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Toast from 'components/common/toast/Toast.vue'


import GoodList from 'components/content/goods/goodList'


//导入混入函数  事件总线 
import {itemListenerMixin,backTopMixin} from 'common/mixin.js'
import { debounce } from '../../common/utils'

export default {
name: 'Detail',
//import引入的组件需要注入到对象中才能使用
components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParmaInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
    Toast
},
data() {
//这里存放数据
return {
    detail: null,
    //topIMages
    toppimages: [],
    goods: {},
    shop: {},
    detailInfo: {},
    paramsInfo: {},
    commentInfo: {},
    recommends: [],
    themeTopYs: [],
    getThemeTopYs: null,
    currentIndex: 0,
    message: "",
    show: false
};
},
mixins: [itemListenerMixin,backTopMixin],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    imageLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopYs()
    },


    detailindex(index){
        //console.log(index)
        this.$refs.scroll.getscrollTo(0,-this.themeTopYs[index],100)
    },


    contentScroll(position){
        const positionY = -position.y
        //console.log(positionY)

        //获取数组长度
        let length = this.themeTopYs.length
        for(let i=0;i<length-1;i++){
            if(this.currentIndex !== i &&  positionY >= this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1]){
                 this.currentIndex = i
                 console.log(this.currentIndex)
                 this.$refs.navbar.activeindex = this.currentIndex
             }
        }
        this.listenShopBackTop(positionY)
    },



        addcartparent(){
            //console.log(1)

            //获取商品购物车展示的信息 
            const product = {}
            product.image = this.toppimages[0]
            product.title = this.goods.tittle
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.detail
            //2 将商品加入到购物车  
            this.$store.dispatch('addCart',product).then(res => {
                // this.message = res
                // this.show = true

                // setTimeout(() => {
                //     this.message = ""
                //     this.show = false
                // }, 1000);


                this.$toast.showmessage(res,1000)
            })
        }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //页面创建时 将路径里面的图片详细iid赋值给detail
    this.detail = this.$route.params.iid
    getDetail(this.detail).then(res => {
        let data = res.result
        console.log(res)
        this.toppimages = data.itemInfo.topImages
        //商品详情页数据 
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //console.log(this.goods)
        this.shop = new shop(data.shopInfo)
        //console.log(this.shop)

        //保存商品的详情数据
        this.detailInfo = data.detailInfo;
        //console.log(this.detailInfo)

        //获取参数信息 
        this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //console.log(this.paramsInfo)

        //取出评论信息 
        if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
        }

        this.getThemeTopYs = debounce(() => {
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
            console.log(this.themeTopYs);
        })


    })

    //请求推荐数据
    getRecommend().then(res => {
        this.recommends = res.data.list
        //console.log(this.recommends)
    })
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
    this.$bus.$off('itemImageLoad',this.itemImgListener)

}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

.detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}


.content {
    height: calc(100% - 44px - 49px);
}

.detailNav {
    position: relative;
    z-index: 9;
    background-color: #fff;
}


.goodrecommends {
    margin-top: 35px;
}

</style>