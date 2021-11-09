<template>
  <menu-bar/>
  <router-view  class="p-40"/>
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
body{
  background-color: black;
}

</style>
