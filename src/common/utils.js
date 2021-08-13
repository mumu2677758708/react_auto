// import { Toast } from 'antd-mobile';
import Toast from 'antd-mobile/lib/toast'; // 加载 JS
import 'antd-mobile/lib/toast/style/css';

export function jumpLink(link){
  if(!link) return;
  if(typeof link === 'object'){
    return hrefNATIVEPage(link);
  }
  window.location.href = link
}
export function hrefNATIVEPage(homeSchemeObject) {
  console.log(window.YRBridge)
  console.log('YRBridge')
  let { funcName, args } = homeSchemeObject;
    if(!funcName) return Toast.info("homeSchemeObject is not correct! ");
    if(!window.YRBridge) return Toast.info("YRBridge is not exit! ");
    if(!args) return window.YRBridge.callHandler(funcName);
    window.YRBridge.callHandler(funcName, args);
}