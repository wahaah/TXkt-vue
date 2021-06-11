<template>
    <div class="item" :class="{active: isActive}" @click="handleClick">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        isActive:{
            type:Boolean, 
            // default:true //设置默认值
        }
    },
    methods:{
        handleClick(){
            this.$emit("onActive")
        }
    }

}
</script>

<style  scoped>
.item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: #eee;
}
.item:hover {
    background-color: lightsteelblue;
}
.active {
    background-color: rgb(17, 101, 185);
}

</style>