<template>
  <menu-bar/>
  <router-view/>
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
