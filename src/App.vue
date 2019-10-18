<template>
  <div id="login" v-bind:style="{ height: wHeight + 'px' }">
    <table>
      <tr v-bind:style="{ height: wHeight/3 + 'px' }">
        <td style="width: 33%"></td>
        <td style="width: 33%;min-width: 300px;"></td>
        <td style="width: 33%"></td>
      </tr>
      <tr v-bind:style="{ height: wHeight/3 + 'px' }">
      </tr>
      <tr v-bind:style="{ height: wHeight/3 + 'px' }">
        <td></td>
        <td>
          <el-row v-bind:style="{bottom: -(wHeight/6 - 40) + 'px'}">
            <p>Copyright ©中国中药 2019-2020</p>
          </el-row>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wHeight: window.innerHeight,
      form: {
        user: "",
        pwd: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({path: '/home'})
    }
  }
};
</script>

<style>
#login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}
#login table {
  width: 100%;
}
#btnTool .el-form-item__content {
  margin-left: 0px !important
}
</style>
