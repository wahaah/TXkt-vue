<template>
    <div class="title-menu">
        <Item  :isActive="titleActive" @onActive="active">
            <div class="inner">
                <div class="left">
                    <!-- 具名插槽 （具有名字的插槽） 当需要放置多个插槽时，用具名插槽 -->
                    <slot name="title"></slot>
                </div>
                <div class="right">
                    <slot name="icon"></slot>
                </div>
            </div>
        </Item>
    </div>
</template>

<script>
import Item from './Item.vue' 
export default {
    props:["titleActive"],
    data(){
        return {

        }
    },
    components:{
        Item
    },
    methods:{
        active(){
            this.$emit("onActive")
        }
    }
}
</script>

<style lang='css' scoped>
.title-menu {
    width: 100%;
    height: 42px;
    line-height: 42px;
}
.inner {
    padding: 0 20px;
}
.left {
    float: left;
}
.right {
    float: right;
}

</style>