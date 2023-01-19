import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addcount(state,payload){
            payload.count++
        },
        addproduct(state,payload){
            payload.checked = true
            state.cartList.push(payload)
            console.log(payload)
        }
    },
    getters,
    actions

})


export default store