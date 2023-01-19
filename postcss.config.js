module.exports = {
    plugins:{
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375,   //视图的高度，对应的是我们设计稿的宽度
            viewportHeight: 667,  //视图的高度  对应的是设计稿的高度 （也可以不配置）
            unitPrecision: 5,     // 指定px转换为视图单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw',     //指定需要转换的视图单位  建议使用vw
            selectorBlackList: ['ignore','tab-bar'],
            minPixelValue: 1,    //小于或者等于1px不转换
            mediaQuery: false,       //允许在媒体查询中转换px
            exclude: [/TabBar/]
            //正则表达式  
            //^abc  表示匹配所有以abc开头的
            //abc$  表示匹配所有以abc结尾的
        }
    }
}