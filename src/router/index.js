/**
 * 页面路由的统一管理
 * 该路由器为避免手动配置系统路由与菜单管理，将系统菜单与路由页面进行了映射
 * 此时你需指定所需路由文件所在目录，并为你的菜单组件添加title字段以用于显示，
 * 系统将自动完成菜单与路由页面间的映射并返回一个路由器
 * 该路由器包含两个参数：
 * routerList  menuList
 * 结构：
 * routerList  [{path: .., name: .., component: ..}, ...]
 * menuList  [{path: .., name: .., title: .., ?submenu: [...]}, ...]
 * 在你拿到路由器后，你可通过router.options.menuList获取菜单，最后进行你的路由配置
 * @author hentai 2019-09-06
 * @version 1.0
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routerList = [];
const menuList = [];

/**
 * 
 * 自动装配系统页面组件，并进行路由
 * 包括：导航菜单、页面（标题）切换
 * 以目录方式进行划分路由级别
 * require.context 参数说明：
 * @param1 string 装载目录
 * @param2 boolean 是否扫描子目录
 * @param3 RegExp 匹配文件正则表达式
 * https://www.webpackjs.com/api/module-methods/#require-context
 */
(() => {
  /**
   * 将字符串第一位字母转小写
   * @param {String} str 目标
   */
  const lowerFirst = (str = '') => {
    return typeof str == 'string' ? str.substring(0, 1).toLowerCase() + str.substring(1) : ''
  }

  /**
   * 深度优先递归器，获取想要的结果集
   * @param {Array} target 递归目标数组
   * @param {String} attr 递归的属性
   * @param {Function} fn 判断器，递归函数会将每一个元素放入，判断为真则将该元素加入结果集
   * @return {Array} res 递归结果集
   */
  const recurr = (target = [], attr = '', fn = () => { return true }, res = []) => {
    target.forEach((item) => {
      fn(item) && res.push(item)
      item[attr] && recurr(item[attr], attr, fn, res)
    });
    return res;
  }

  /**
   * 在路由表中获取相应路径的路由的父级路由
   * @param {String} pathStr 目标路由的相对路径
   */
  let getSuper = (pathStr = '') => {
    let arr = pathStr.split(/\//)
    if (!arr.length) return null;
    let pnm = arr[arr.length - 2]
    pnm = lowerFirst(pnm)
    if (/^\.$/.test(pnm)) return null;
    let pobj = recurr(routerList, 'children', (item) => {
      return item && item.name == pnm
    })[0];
    if (!pobj) {
      throw new Error(pnm + '：目录命名不规范，自动装配失败。')
    }
    return pobj;
  }

  /**
   * 在路由表中获取相应路径的路由的路由器
   * @param {String} pathStr 目标路由的相对路径
   */
  let getRouter = (pathStr = '', component = {}) => {
    let arr = pathStr.split(/\//)
    if (!arr.length) return null;
    let nm = arr[arr.length - 1].replace(/\.\w+$/g, '')
    nm = lowerFirst(nm)
    let obj = recurr(routerList, 'children', (item) => {
      return item && item.name == nm
    })[0];
    if (obj) {
      console.warn("The same file name exists, the last one will be kept, The file name is: " + nm);
      return obj;
    }
    obj = {
      path: "/" + arr.slice(1, arr.length - 1).join('/') + '/' + nm,
      name: nm,
      component: null
    }
    if (component.type == "inPage") {
      let pobj = getSuper(pathStr)
      if (pobj) {
        pobj.children = pobj.children || []
        pobj.children.push(obj)
      }
    } else {
      routerList.push(obj)
      if (arr.length > 2) {
        let pnm = arr[arr.length - 2];
        let pmenu = recurr(menuList, 'submenu', (item) => {
          return item && item.name == pnm
        })[0];
        if (!pmenu) {
          pmenu = {
            path: obj.path,
            name: pnm,
            title: (config.menuMap || {})[pnm] || '',
            submenu: []
          }
          menuList.push(pmenu)
        }
        pmenu.submenu.push({
          path: obj.path,
          name: component.name,
          title: component.title
        });
      } else {
        menuList.push({
          path: obj.path,
          name: component.name,
          title: component.title
        });
      }
    }
    return obj;
  }

  const configComponents = require.context("@/configure", false, /\.(vue|js)$/);
  const config = configComponents("./index.js").default || configComponents("./index.js");
  if (!config) {
    throw new Error("没有系统配置，请前往src/configure下进行配置");
  }
  const requireComponents = require.context("@/pages/home", true, /\.(vue|js)$/);

  requireComponents.keys().forEach((fileName) => {
    const componentConfig = requireComponents(fileName)
    let router = getRouter(fileName, componentConfig.default || componentConfig)
    if (router) {
      if (router.name == config.router.welcome) {
        router.path = '/'
      }
      router.component = componentConfig.default || componentConfig
    }
  });
  config.router.compare && (typeof config.router.compare == 'function') && menuList.sort(config.router.compare);
})(this)

export default new Router({
  routes: routerList,
  menuList: menuList
})
