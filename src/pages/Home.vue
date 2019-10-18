<template>
  <div>
    <sroll-wall />
    <router-link :to="{path: '/Setting'}">setting</router-link>
    <el-container>
      <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
        <el-menu router v-for="(menu, index) in routerList" :key="index">
          <el-menu-item v-if="!menu.submenu" :index="menu.path">
            <span>{{menu.title}}</span>
          </el-menu-item>
          <el-submenu v-else-if="menu.submenu" :index="menu.path">
            <template slot="title">{{menu.title}}</template>
            <el-menu-item-group v-for="(submenu, index1) in menu.submenu" :key="index1">
              <el-menu-item :index="submenu.path">
                <span>{{submenu.title}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "@/router";
import SrollWall from "@/components/SrollWall";
import Setting from "@/components/Setting";

router.addRoutes([
  {
    path: "/Setting",
    name: "Setting",
    component: Setting
  }
]);

export default {
  name: "Home",
  title: "首页",
  data() {
    return {
      routerList: router.options.menuList
    };
  },
  router,
  components: {
    SrollWall
  }
};
</script>

<style>
</style>