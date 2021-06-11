import Vue from 'vue'
// vue中对第三方库直接导入的 是包管理器的支持 会从node_modules中直接找  找的顺序？？
import App from './App.vue'

import data from './mock/data.json'

import channelService from './service/channel'
// channelService.getChannels();  // 直接拿到是promise
async function test(){
  var channelsRes = await channelService.getChannels();
  console.log(channelsRes);
}
test()
console.log(data);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
