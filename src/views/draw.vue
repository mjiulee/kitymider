<template>
    <div class="mdraw-layout">
      <vue-kityminder class="minder-canvas-view" ref="kityminder" theme="fresh-blue-compat" template="right"
        :value="mindjson" @selection-change="handleSelection" @on-close="onClose">
      </vue-kityminder>
    </div>
  </template>
  
  <script>
  import { useRoute } from "vue-router";
  
  export default {
    name: "Draw",
    data() {
      return {
        curDraw: {},
        mindjson: {},
      };
    },
    async mounted() {
      const route = useRoute();
      console.log(route.params);
      this.mindjson = {"data":{"id":1,"text":"root","background":"#F56C6C"},"children":[{"data":{"id":"1711589403733","created":1711589403722,"text":"分支主题","priority":"1"},"children":[]},{"data":{"id":"1711589404369","created":1711589404359,"text":"分支主题","priority":"2"},"children":[{"data":{"id":"1711589407865","created":1711589407858,"text":"分支主题"},"children":[]},{"data":{"id":"1711589408388","created":1711589408377,"text":"分支主题"},"children":[{"data":{"id":"1711589415892","created":1711589415876,"text":"分支主题"},"children":[]},{"data":{"id":"1711589417281","created":1711589417264,"text":"分支主题"},"children":[]}]},{"data":{"id":"1711589408869","created":1711589408858,"text":"分支主题"},"children":[]}]},{"data":{"id":"1711589404876","created":1711589404868,"text":"分支主题","priority":"3"},"children":[{"data":{"id":"1711589409633","created":1711589409621,"text":"分支主题"},"children":[]}]},{"data":{"id":"1711589406463","created":1711589406452,"text":"分支主题","priority":"4"},"children":[{"data":{"id":"1711589410188","created":1711589410173,"text":"分支主题"},"children":[{"data":{"id":"1711589411648","created":1711589411634,"text":"分支主题","background":"#67C23A"},"children":[{"data":{"id":"1711589412882","created":1711589412874,"text":"分支主题","color":"#409EFF"},"children":[]},{"data":{"id":"1711589413524","created":1711589413507,"text":"分支主题","color":"#409EFF"},"children":[]},{"data":{"id":"1711589414115","created":1711589414100,"text":"分支主题","color":"#409EFF"},"children":[]},{"data":{"id":"1711589414913","created":1711589414894,"text":"分支主题","color":"#409EFF"},"children":[]}]}]}]},{"data":{"id":"1711589407027","created":1711589407019,"text":"分支主题","priority":"1"},"children":[{"data":{"id":"1711589410790","created":1711589410778,"text":"分支主题"},"children":[]}]}]}
    },
    methods: {
      handleContent(data) {
        console.log(data);
      },
      handleNode(data) {
        console.log(data);
      },
      handleRemove(data) {
        console.log(data);
      },
      handleSelection(data) {
        console.log(data);
      },
      onClose(data) {
        alert(JSON.stringify(data))
      },
    },
  };
  </script>
  
  <style scoped>
  .mdraw-layout {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .mdraw-layout .top-breadcrumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 36px;
    background: #545c64;
    z-index: 1000;
    border-bottom: solid 1px #dcdfe6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .mdraw-layout .el-breadcrumb__inner {
    color: #FFF !important;
  }
  
  .mdraw-layout .top-breadcrumb .tip {
    margin: 0 20px;
    line-height: 36px;
    text-align: left;
  }
  
  .minder-canvas-view {
    height: 100vh;
  }
  </style>