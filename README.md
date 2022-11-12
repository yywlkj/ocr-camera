# ocr-camera

## 功能简介
### 高拍仪ocr拍照图片识别组件
  1. 拍照图片上传
  2. 图片识别（接口调用分为两种模式，一种http形式，一种websocket形式）以及结果预览
  3. 图片矫正，旋转
  4. 摄像头切换，清晰度切换

  
## 项目安装
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 组件参数
参数     | 作用
-------- | -----
ocrroot  | ocr接口根路径
websockocrurl |  wesocket请求url
loadingIcon   | 加载动画图标spinner or dots or bars
loadingIconColor  |  加载动画图标颜色
imgprex   | 生成图片名带有前缀
fullPageLoading | 加载动画是否全屏
ocrrecordid | ocr识别唯一标识
model  | 模式，分为拍照模式（默认），以及预览模式


