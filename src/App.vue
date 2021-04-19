<template>
  <div id="app">
    <treeControl :dataList="list" @getInfo="getInfoFun" @getClickInfo="getClickInfo"></treeControl>
  </div>
</template>
<script>
  import treeControl from '@/components/treeControl'
export default {
  name: 'App',
  data () {
    return {
    list: [
      {
        name: '张三',
        id: 1,
        children: null
      },
      {
        name: '李四',
        id: 2,
        children:[
          {
            name: '李-01',
            id: 2.1,
            children: [
              {
                name: '李-01-01',
                id: 2.11,
                children: [
                  {
                    name: '四哥',
                    id: 2.22,
                    children: [
                      {
                        name: '四叔',
                        id: 2.33
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '李-02',
            id: 2.2,
            children: null
          }
        ]
      }
     ]
    }
  },
  components: {
    treeControl
  },
  methods: {
    getInfoFun (info) {
      console.log(info)
    },
    getClickInfo (info) {
      console.log('点击的是名字：', info)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
