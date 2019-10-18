<template>
  <div>
    <div class="block" style="background-color: #ccc;">
      <el-carousel height="160px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item" style="width: 100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
const images = require.context("../../static/", true, /\.(png|jpg)$/).keys().map(item => {
  return item.replace(/\.\//, '../static/')
});
export default {
  data() {
    return {
      imgs: images
      // imgs: ["../static/image/bg.png"]
      // [
      //   "../static/image/bg.png"
        // "../static/image/Chrysanthemum.jpg",
        // "../static/image/Desert.jpg",
        // "../static/image/Hydrangeas.jpg",
        // "../static/image/Jellyfish.jpg",
        // "../static/image/Koala.jpg"
      // ]
    };
  },
  name: "SrollWall"
};
</script>

<style>
</style>