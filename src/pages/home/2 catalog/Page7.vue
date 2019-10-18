<template>
  <div>
    <router-link :to="{name:'page6'}">test</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Page6",
  title: '页面6'
}
</script>