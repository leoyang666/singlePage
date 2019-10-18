<template>
  <el-container>
    <el-aside style="width: 200px;">
      <el-button-group>
        <el-button type="primary" @click="addBtnEvt" icon="el-icon-circle-plus" size="mini">添加</el-button>
        <el-button type="primary" @click="delBtnEvt" icon="el-icon-remove" size="mini">删除</el-button>
      </el-button-group>
      <el-menu v-for="(menu, index) in menuList" :key="index">
        <el-menu-item v-if="!menu.submenu" :index="index+''">
          <span>{{menu.name}}</span>
        </el-menu-item>
        <el-submenu v-else-if="menu.submenu" :index="index+''">
          <template slot="title">{{menu.name}}</template>
          <el-menu-item-group v-for="(submenu, index1) in menu.submenu" :key="index1">
            <el-menu-item :index="index + '-' + index1">
              <span>{{submenu.name}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-dialog title="新增/修改" :visible.sync="dialogVisible" width="30%">
        上级目录：
        <el-input placeholder="上级目录" v-model="menu.pnm" clearable></el-input>类型：
        <el-input placeholder="dir | menu" v-model="menu.type" clearable></el-input>名称：
        <el-input placeholder="目录或菜单名" v-model="menu.name" clearable></el-input>文件名称：
        <el-input placeholder="保存文件的名称" v-model="menu.fileName" clearable></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="closeDialog">确 定</el-button>
        </span>
      </el-dialog>
    </el-aside>
    <el-main>
      <mavon-editor v-model="value" :placeholder="'.....'" @save="save" />
    </el-main>
  </el-container>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor);

export default {
  data() {
    return {
      value: "hello world",
      dialogVisible: false,
      menu: {
        pnm: "",
        type: "",
        name: "",
        fileName: ""
      },
      menuList: []
    };
  },
  methods: {
    save: (value, render) => {
      render = `<template><div>${render}<div></template>export default {name: , title: }`;
      const blob = new Blob([render], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "test.html";
      a.click();
    },
    addBtnEvt: function() {
      this.dialogVisible = true;
      this.menu = {
        pnm: "",
        type: "",
        name: "",
        fileName: ""
      };
    },
    closeDialog: function() {
      let that = this;
      this.dialogVisible = false;
      this.menu.type == "dir" && (this.menu.submenu = []);
      if (this.menu.pnm) {
        let pobj = that.recurr(that.menuList, "submenu", item => {
          return item.name == that.menu.pnm;
        })[0];
        if (pobj) {
          pobj.submenu.push(this.menu);
        } else {
          alert("没有这个目录");
        }
      } else {
        this.menuList.push(this.menu);
      }
    },
    selected: function(index, indexPath) {},
    delBtnEvt: function() {},
    recurr: (function() {
      "use strict";
      return function recurr(
        target = [],
        attr = "",
        fn = () => {
          return true;
        },
        res = []
      ) {
        target.forEach(item => {
          fn(item) && res.push(item);
          item[attr] && recurr(item[attr], attr, fn, res);
        });
        return res;
      };
    })()
  }
};
</script>

<style>
</style>