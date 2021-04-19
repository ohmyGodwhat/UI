<template>
  <div class="view">
    <div v-for="(items, index) in dataList" 
          class="itemsClass" 
         :key="index">
      <img src="../assets/icon.png" v-if='items.children' @click='getThisChildren(items)'>
      <span class="itemsName" @click="getThisInfo(items)">{{items.name}}</span>
      <div v-if="items.children" class="childrenClass">
        <tree-control 
        :dataList="items.children" 
        @getInfo="getInfoFun"
        @getClickInfo="getClickInfoFun"
        ></tree-control>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeControl',
  props: ['dataList'],
  methods: {
    getThisChildren (items) {
      this.$emit('getInfo', items)
    },
    getInfoFun (items) {
      this.$emit('getInfo', items)
    },
    getThisInfo (info) {
      this.$emit('getClickInfo', info)
    },
    getClickInfoFun (info) {
      this.$emit('getClickInfo', info)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view{
  width:100px;
}
.itemsClass span{
  display:inline-block;
  cursor: pointer;
}
   .itemsClass {
    display: inline-block;
    width:100px;
   }
  .itemsClass img{
    width:24px;
    height:24px;
    vertical-align: middle;
    cursor: help;
  }
  .itemsName{
    border-bottom:1px solid #000;
  }
  .childrenClass{
    padding-left:20px;
  }
</style>
