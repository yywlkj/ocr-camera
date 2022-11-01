// 自动注册到全局
import Vue from 'vue';

Vue.directive('resize', {
    bind(el, binding) {
        // el为绑定的元素，binding为绑定给指令的对象
        let width = '', height = '';
        function isReize() {
            const style = document.defaultView.getComputedStyle(el);
            if(style!=undefined&&style.width!=undefined&&style.height!=undefined) {
                if (width !== style.width || height !== style.height) {
                    // 关键(这传入的是函数,所以执行此函数)
                    binding.value({width: style.width, height: style.height});
                }
                width = style.width;
                height = style.height;
            }
        }
        el.__vueSetInterval__ = setInterval(isReize, 0);
    }
});