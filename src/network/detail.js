import { request } from "./request";

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}



//获取详情页推荐数据 
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}



//封装商品详情页下的文字信息  为一个对象 
export class Goods{
    constructor(itemInfo,columns,services) {
        this.tittle = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}



//封装商品相关的类  为是shop
export  class shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}



//商品详情页图片下面的相关数据 
export class GoodsParam{
    constructor(info,rule){
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
        
    }
}