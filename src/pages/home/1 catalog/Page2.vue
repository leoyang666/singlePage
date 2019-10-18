<template>
  <div class="demo-block demo-zh-CN demo-menu hover"><div class="source"><div><div class="tac el-row"><div class="el-col el-col-12"><h5>默认颜色</h5> <ul role="menubar" class="el-menu-vertical-demo el-menu"><li role="menuitem" aria-haspopup="true" class="el-submenu"><div class="el-submenu__title" style="padding-left: 20px;"><i class="el-icon-location"></i> <span>导航一</span><i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div><ul role="menu" class="el-menu el-menu--inline" style="display: none;"> <li class="el-menu-item-group"><div class="el-menu-item-group__title" style="padding-left: 40px;">分组一</div><ul> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;">选项1</li> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;">选项2</li></ul></li> <li class="el-menu-item-group"><div class="el-menu-item-group__title" style="padding-left: 40px;">分组2</div><ul><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;">选项3</li></ul></li> <li role="menuitem" aria-haspopup="true" class="el-submenu"><div class="el-submenu__title" style="padding-left: 40px;">选项4<i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div><ul role="menu" class="el-menu el-menu--inline" style="display: none;"> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 60px;">选项1</li></ul></li></ul></li> <li role="menuitem" tabindex="-1" class="el-menu-item is-active" style="padding-left: 20px;"><i class="el-icon-menu"></i> <span>导航二</span></li> <li role="menuitem" tabindex="-1" class="el-menu-item is-disabled" style="padding-left: 20px;"><i class="el-icon-document"></i> <span>导航三</span></li> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;"><i class="el-icon-setting"></i> <span>导航四</span></li></ul></div> <div class="el-col el-col-12"><h5>自定义颜色</h5> <ul role="menubar" class="el-menu-vertical-demo el-menu" style="background-color: rgb(84, 92, 100);"><li role="menuitem" aria-haspopup="true" class="el-submenu"><div class="el-submenu__title" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"><i class="el-icon-location"></i> <span>导航一</span><i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div><ul role="menu" class="el-menu el-menu--inline" style="background-color: rgb(84, 92, 100); display: none;"> <li class="el-menu-item-group"><div class="el-menu-item-group__title" style="padding-left: 40px;">分组一</div><ul> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);">选项1</li> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);">选项2</li></ul></li> <li class="el-menu-item-group"><div class="el-menu-item-group__title" style="padding-left: 40px;">分组2</div><ul><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);">选项3</li></ul></li> <li role="menuitem" aria-haspopup="true" class="el-submenu"><div class="el-submenu__title" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);">选项4<i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div><ul role="menu" class="el-menu el-menu--inline" style="background-color: rgb(84, 92, 100); display: none;"> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 60px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);">选项1</li></ul></li></ul></li> <li role="menuitem" tabindex="-1" class="el-menu-item is-active" style="padding-left: 20px; color: rgb(255, 208, 75); background-color: rgb(84, 92, 100);"><i class="el-icon-menu"></i> <span>导航二</span></li> <li role="menuitem" tabindex="-1" class="el-menu-item is-disabled" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"><i class="el-icon-document"></i> <span>导航三</span></li> <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(84, 92, 100);"><i class="el-icon-setting"></i> <span>导航四</span></li></ul></div></div></div></div><div class="meta" style="height: 2139px;"><div class="description"><div><p>通过<code>el-menu-item-group</code>组件可以实现菜单进行分组，分组名可以通过<code>title</code>属性直接设定，也可以通过具名 slot 来设定。</p></div></div><div class="highlight"><pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tac"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>默认颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span>
      <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-vertical-demo"</span>
      @<span class="hljs-attr">open</span>=<span class="hljs-string">"handleOpen"</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-document"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航四<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>自定义颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span>
      <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-vertical-demo"</span>
      @<span class="hljs-attr">open</span>=<span class="hljs-string">"handleOpen"</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">"handleClose"</span>
      <span class="hljs-attr">background-color</span>=<span class="hljs-string">"#545c64"</span>
      <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#fff"</span>
      <span class="hljs-attr">active-text-color</span>=<span class="hljs-string">"#ffd04b"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-document"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航四<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleOpen(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div><div class="demo-block-control" style="left: 0px;"><i class="el-icon-caret-top hovering"></i><span style="" class="text-slide-enter text-slide-enter-active">隐藏代码</span><button type="button" class="el-button control-button el-tooltip el-button--text el-button--small" aria-describedby="el-tooltip-9982" tabindex="0" style=""><!----><!----><span>
          在线运行
        </span></button></div></div>
</template>
<script>
export default {
  name: "Page2",
  title: '页面二'
}
</script>