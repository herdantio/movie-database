<template>
  <el-row justify="space-between" class="menuBarBackgroundColor paddingMenu">
    <el-col :span="3" class="marginMenuItem">
      <h2>Movie</h2>
    </el-col>
    <el-col :span="4" class="marginMenuItem">
      <el-button round>ADD MOVIE</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MenuBar"
}
</script>

<style scoped>
.menuBarBackgroundColor{
  background-color: #5D5FEF;
}
.paddingMenu{
  padding: 2px;
}
.marginMenuItem{
  margin: 2px;
}

.badgeFont{
  font-size: 20px;
}
</style>