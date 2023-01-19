import axios from 'axios'


//推荐使用这种 promise
export function request(config){
    
        const interance1 = axios.create({
            // baseURL: 'http://152.136.185.210:7878/api/hy66',
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })

        //配置拦截器 
        //axios.interceptors   这是全局拦截   2.1  请求拦截的作用
        interance1.interceptors.request.use(config => {
            //获取请求的所有信息   打印   获取到此信息以后一定要记得返回  否则将不会发送真正的请求
            //console.log(config)
            //拦截到  要还给人家
            return config
        }, err => {
            //console.log(err)
        })


        //2.2  响应拦截 
        interance1.interceptors.response.use(res => {
            //console.log(res)
            //同理  拦截到以后照样要将拦截到的数据返回给前端
            return res.data
        },err => {
            //console.log(err)
        })




        //查看源码发现  这个函数返回的就是一个promise对象 
        return interance1(config)



}