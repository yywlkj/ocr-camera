import "./src/assets/iconfont/iconfont.css";
import "./src/assets/iconfont/iconfont.ttf";
import "./src/assets/iconfont/iconfont.woff";
import "./src/assets/iconfont/iconfont.woff2";
import  IbzOcrCamera from "@/components/IbzOcrCamera";

let ModuleObj = {
    IbzOcrCamera
}
let ibzOcrCamera = {}
ibzOcrCamera.install = (Vue) => {
    for (let i in ModuleObj) {
        Vue.component(i, ModuleObj[i])
    }
}
export default ibzOcrCamera
