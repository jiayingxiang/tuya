import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'


Vue.filter("res",function(val){
  return val==1?"活动进行中":"活动已结束"
})
Vue.filter("date",function(item){
    var end=new Date(item.end).getTime();
    var now=new Date().getTime();
    var s=parseInt((end-now)/1000);
    if(s>0){
    var d=parseInt(s/3600/24);
    if(d<10) d="0"+d;
    var h=parseInt(s%(3600*24)/3600);
    if(h<10) h="0"+h;
    var m=parseInt(s%3600/60);
    if(m<10) m="0"+m;
        s%=60;
    if(s<10) s="0"+s;
    
    } else {
    d=0;   
    }
    return parseInt(d)
})
Vue.filter("hours",function(item){
  var end=new Date(item.end).getTime();
  var now=new Date().getTime();
  var s=parseInt((end-now)/1000);
  if(s>0){
  var d=parseInt(s/3600/24);
  if(d<10) d="0"+d;
  var h=parseInt(s%(3600*24)/3600);
  if(h<10) h="0"+h;
  var m=parseInt(s%3600/60);
  if(m<10) m="0"+m;
      s%=60;
  if(s<10) s="0"+s;
  
  } else {
  h=0;   
  }
  return parseInt(h);
})
Vue.filter("minute",function(item){
  var end=new Date(item.end).getTime();
  var now=new Date().getTime();
  var s=parseInt((end-now)/1000);
  if(s>0){
  var d=parseInt(s/3600/24);
  if(d<10) d="0"+d;
  var h=parseInt(s%(3600*24)/3600);
  if(h<10) h="0"+h;
  var m=parseInt(s%3600/60);
  if(m<10) m="0"+m;
      s%=60;
  if(s<10) s="0"+s;
  
  } else {
  m=0;   
  }
  return parseInt(m)
})
Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.use(VueLazyload,{
  preload:3,
  attempt:1,
  throttleWait:500
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
