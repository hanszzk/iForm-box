<template>
  <div>
    <el-scrollbar>
      <el-menu
        mode="vertical"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span slot="title">List</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-box"></i>
          <span slot="title">Boxs</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss';
export default {
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>

<style>
</style>