<template>
  <div>
    <menu-bar/>
    <router-view class="p-20"/>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "App",
  components: {
    MenuBar: defineAsyncComponent(() => import('@/atomic/molecules/MenuBar'))
  }
}
</script>

<style lang="scss">

</style>
