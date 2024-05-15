/**
 * 参考文章https://blog.csdn.net/xzwwjl1314/article/details/129861263
 */
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/home";
import content from "./content.json";

export interface IRouterMap {
  path: string;
  auth: string; // 是否需要鉴权
  title?: string;
  key?: string; // 与path保持一致
  element?: any;
  hidden?: boolean; // 是否显示在菜单上, 默认要显示。加该参数主要是隐藏用于重定向的菜单
  children?: IChildRouterMap[];
}

export interface IChildRouterMap extends IRouterMap {
  parentpath?: string; // 父级路径 用于面包屑和回显两个逻辑 如果是三级菜单 那么parentpath = /一级路径/二级路径 以此类推
}

const contentRouter = Object.keys(content).map((item) => {
  return {
    path: `/${item}`,
    title: { ...content }[item]?.title,
    auth: item,
    children: { ...content }[item]?.list.map((temp) => {
      const { title, key } = temp;
      return {
        path: key,
        title,
        auth: item + "_" + title,
        element: <div>{`${item}_${title}`}</div>,
      };
    }),
  };
});

export const routerList: IRouterMap[] = [
  {
    path: "/",
    auth: "0",
    title: "Home",
    key: "Home",
    element: <Home />,
    children: [
      {
        path: "/homepage",
        title: "首页",
        auth: "homepage",
        element: <div>page1</div>,
      },
      ...contentRouter,
      //   {
      //     path: "/articles",
      //     title: "面试八股",
      //     auth: "articles",
      //     element: <div>page2</div>,
      //   },
      //   {
      //     path: "/code",
      //     title: "手写代码",
      //     auth: "code",
      //     children: [
      //       {
      //         path: "son1",
      //         title: "son1",
      //         auth: "0_3_1",
      //         element: <div>son1</div>,
      //       },
      //     ],
      //   },
    ],
  },
];

const router = createBrowserRouter(routerList);

export default router;
