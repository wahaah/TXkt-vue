<template>
    <div class="item" :class="{active: isActive}" @click="handleClick">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    // 父组件给子组件传值  通过props来接收 然后使用

    // props:['isActive']
    // 若要对props有类型控制的提示信息，则按照如下实现
    props:{
        isActive:{
            type:Boolean,  // 约束类型
            // required:true, // 约束是否为必填
            default:true //设置默认值
        }
    },
    methods:{
        handleClick(){
            // 子组件通知父组件 触发一个事件 参数1：事件名   参数2：传递的参数
            this.$emit("onActive",112)
        }
    }

}
</script>

<style  scoped>
.item {
    cursor: pointer;
    width: 100%;
    height: 100%;
}
.item:hover {
    background-color: lightblue;
}
.active {
    background-color: lightslategray;
}

</style>