/**
 * ----------------动态路由器配置---------------
 * 为让系统具备灵活、可拓展、易维护，引入配置对象
 * router提供路由根目录（root），默认页面（welcome），菜单排序钩子（compare）
 * menuMap：目录名称映射表
 */
export default {
  "router": {
    "root": "home",
    "welcome": "welcome",
    compare: (a, b) => {
      if (a.name == 'Welcome') {
        a.path = '/';
        return -1;
      }
      let i = +a.name.substring(0, 1)
      let j = +b.name.substring(0, 1)
      if (isNaN(i) && isNaN(j)) return 0;
      if (isNaN(i)) return 1;
      if (isNaN(j)) return -1;
      return i - j;
    }
  },
  "menuMap": {
    "1 catalog": "目录1",
    "2 catalog": "目录2"
  }
}