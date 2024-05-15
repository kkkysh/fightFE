import * as React from "react";
import { Layout, Menu, Breadcrumb } from "@arco-design/web-react";
import {
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from "@arco-design/web-react/icon";
import { Outlet, useNavigate } from "react-router-dom";
import { routerList } from "../../router";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Layout className="layout-collapse-demo">
      <Sider
        collapsed={collapsed}
        onCollapse={() => setCollapsed((pre) => !pre)}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo" />
        <Menu
          defaultOpenKeys={["1"]}
          // defaultSelectedKeys={["0_3"]}
          //   onClickMenuItem={(key) =>
          //     Message.info({
          //       content: `You select ${key}`,
          //       showIcon: true,
          //     })
          //   }
          style={{ width: "100%" }}
        >
          {routerList?.[0]?.children?.map((item) => {
            if (item.children) {
              return (
                <SubMenu
                  key={item.auth}
                  title={
                    <>
                      <IconCalendar />
                      {item.title}
                    </>
                  }
                >
                  {item.children.map((subItem) => {
                    return (
                      <MenuItem
                        key={subItem.auth}
                        onClick={() => navigate(`${item.path}/${subItem.path}`)}
                      >
                        {subItem.title}
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            }
            return (
              <MenuItem key={item.auth} onClick={() => navigate(item.path)}>
                <IconCalendar />
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 20 }}>Fight FE</Header>
        <Layout style={{ padding: "0 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
