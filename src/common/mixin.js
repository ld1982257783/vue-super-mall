import { debounce } from "./utils"
import backTop from 'components/content/backTop/backTop.vue'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
            
        }
    },
    mounted() {

        //解决页面刷新刷不动BUG
        const refresh = debounce(this.$refs.scroll.refresh,200)
    
        this.itemImgListener = () => {
            // console.log('-----')
            //连续调用refresh函数非常不好 可以设置一个防抖动函数  避免经常调用
            refresh()
        }
        //监听item中图片加载完成    默认情况下没有$bus组件  在main.js里面进行 vue原型添加
        this.$bus.$on('itemImageLoad',this.itemImgListener) 
    
    }
}



export const backTopMixin = {
    components: {
        backTop
    },

    data() {
        return {
            isshowing: false
        }
    },


    methods: {
        backtopscroll(){
            this.$refs.scroll.getscrollTo(0,0,500)
        },

        listenShopBackTop(positionY) {
             this.isshowing = Math.abs(positionY) > 1000
        }
    },
}