<template>
  <div class="app-root">
    <router-view></router-view>
  </div>
</template>

<script>
import {
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs,
  ref
} from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const refHeader = ref(null);

    const state = reactive({
    });

    onMounted(() => {
      router.push({ name: "Draw" });
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="scss">
body {
  margin: 0 0 !important;
  padding: 0 0;
}


// 调整el的一些显示
// .el-input--small .el-input__wrapper{
//     box-shadow:none !important;
// }

// .el-input--small .el-textarea__inner{
//     box-shadow:none !important;
// }

$root: "app-root";
$primary: #409eff;

.#{$root} {
  margin: 0 0;
  padding: 0 0;

  .ml-2 {
    margin-left: 6px;
  }

  .w-20 {
    width: 80px;
  }
}
</style>