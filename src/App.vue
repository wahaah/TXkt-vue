<template>
 <!-- <div>
   一般不建议 对子级直接设置宽高
    <div class="itemBox" >
    由于设置isActive是必填的 :isActive="false" 不给默认值会报错
    由于设置的boolean类型 所以需要对属性绑定
    若设置了默认值 不写:isActive="false" 则不会报错
        <Item :isActive="currentActive==='song'" @onActive="changeActive('song')">
          <span>音乐</span>
        </Item>
    </div>
    <div class="itemBox" >
      监听子组件给父组件 广播 过来的事件
        <Item :isActive="currentActive==='dance'" @onActive="changeActive('dance')">
          <span>舞蹈</span>
        </Item>
    </div>
 </div> -->
 <div>
   <div style="width:240px">
       <TitleItem :titleActive="select" @onActive="select=true">
         <!--  v-slot指令要放在template中用 代表给title具名插槽传递内容 -->
        <template  v-slot:title>
            游戏专区
        </template>
          <template  v-slot:icon>
            >
        </template>
      </TitleItem>
   </div>
 </div>
</template>

<script>
// 引入要使用的组件
// import Item from './components/Item.vue'
import TitleItem from './components/TitleItem.vue'
export default {
  data(){
    return {
      select:false
      // currentActive:"song"
    }

  },
  components:{
    TitleItem
  },
  methods: {
    // changeActive(cur){
    //   this.currentActive = cur;
    // }
  }
}
</script>

<style>
.itemBox {
  background-color: #e7e7e7;
  width: 140px;
  height: 50px;
}
</style>
