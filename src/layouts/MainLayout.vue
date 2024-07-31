<!-- 主要内容区域框架 -->
<script setup>

</script>

<template>
  <div class="layout layout-full layout-position">
    <div class="layout-content layout-full">
      <!-- Header -->
      <div class="layout-header"></div>
      <!-- Body -->
      <div class="layout-content layout-has-aside">
        <div class="layout-aside"></div>
        <div class="layout-main">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
  