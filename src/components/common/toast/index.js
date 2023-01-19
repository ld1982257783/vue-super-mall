import Toast from './Toast.vue'
const obj = {
}


obj.install = function (Vue){
    //console.log('执行了obj的install函数')

    //创建组件构造器 
    const toastContrustor = Vue.extend(Toast)

    //根据组件构造器创建对象 
    const toast = new toastContrustor()
    
    //将组件对象 手动挂载到一个元素上
    toast.$mount(document.createElement('div'))

    //
    document.body.appendChild(toast.$el)

    //给Vue原型添加对象 
    Vue.prototype.$toast = toast
}


export default obj
