import Button from '../button/button';
// 在每个组件下面定义一个install方法。
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Button)
}
export default Button;
