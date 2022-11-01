import "./src/assets/iconfont/iconfont.css";
import "./src/assets/iconfont/font_3715502_2ljdle59amv.ttf";
import "./src/assets/iconfont/font_3715502_2ljdle59amv.woff";
import "./src/assets/iconfont/font_3715502_2ljdle59amv.woff2";
import  IbzOcrCamera from "./src/components/IbzOcrCamera";


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
