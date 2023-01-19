export default {
    addCart(context,payload){   
        return new Promise((resolve,reject) => {
            let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
            if(oldproduct){
               context.commit('addcount',oldproduct)
               resolve('当前商品数量加1')
            }else{
                payload.count = 1
                context.commit('addproduct',payload)
                resolve('添加购物车成功')
            }
        })
    }
}