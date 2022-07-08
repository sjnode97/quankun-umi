import { defineConfig } from 'umi';
let data = {
  kk: 'dsjsjjs'
}
export default defineConfig({
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/pages/index'
    },
    {
      exact: true,
      name: 'app-1',
      path: '/app-1',
      microApp: 'app-1',
    },
    /*{
      exact: true,
      name: 'app-2',
      path: '/app-2',
      microApp: 'app-2',
    },*/
  ],
  fastRefresh: {},
  layout: {
    title: 'Ant Design',
    locale: false, // 默认开启，如无需菜单国际化可关闭
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app-1',
          entry: '//localhost:8002',
          props: {
            kk: 'dsjsjjs',
            data: '222',
            tt: 'kkk',
          },
        },
       /* {
          name: 'app-2',
          entry: '//localhost: 9002'
        }*/
      ]
    }
  },
});
