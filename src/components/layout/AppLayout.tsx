import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoonOutlined,
    SunOutlined,
    HomeOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, Switch, Avatar, Breadcrumb, Space } from "antd";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { menuItems } from "../../constants/menuItems";
import { useAuth } from "../../context/AuthContext";
import { LogoIcon } from "../../assets/icons";
import { routes } from "../../utils/routes";

const AppLayout = () => {
    const { themeMode, changeTheme } = useAuth();
    const location = useLocation(); // Corrected variable name
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <Layout
            style={{
                minHeight: "100vh",
                backgroundColor: themeMode === "dark" ? "#000" : "#f5f5f5",
            }}
        >
            <Header
                className="header"
                style={{
                    padding: 0,
                    backgroundColor: themeMode === "dark" ? "#333" : "#fff",
                }}
            >
                <div
                    style={{
                        paddingRight: 10,
                        paddingLeft: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ height: 40 }}>
                        <LogoIcon />
                    </div>
                    <Space>
                        <Switch
                            unCheckedChildren={<SunOutlined />}
                            checkedChildren={<MoonOutlined />}
                            defaultChecked={themeMode === "dark"}
                            onChange={changeTheme}
                        />
                        <Avatar
                            style={{
                                backgroundColor: "#777",
                                verticalAlign: "middle",
                            }}
                        >
                            A
                        </Avatar>
                    </Space>
                </div>
            </Header>

            <Layout
                style={{
                    backgroundColor: themeMode === "dark" ? "#222" : "#f5f5f5",
                }}
            >
                <Sider
                    onMouseLeave={() => setCollapsed(true)}
                    onMouseEnter={() => setCollapsed(false)}
                    trigger={null}
                    collapsible
                    theme={themeMode === "light" ? "light" : "dark"}
                    collapsed={collapsed}
                    width={200}
                    style={{
                        margin: 10,
                        borderRadius: "24px",
                        overflow: "hidden",
                    }}
                >
                    <Menu
                        theme={themeMode === "light" ? "light" : "dark"}
                        defaultSelectedKeys={[location.pathname]}
                        style={{
                            height: "100%",
                            borderRight: 0,
                            padding: 10,
                            backgroundColor:
                                themeMode === "dark" ? "#333" : "#fff",
                        }}
                        items={menuItems}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: "0 24px 24px",
                        backgroundColor:
                            themeMode === "dark" ? "#222" : "#f5f5f5",
                    }}
                >
                    <Breadcrumb
                      items={[
                        {
                          href: '',
                          title: <HomeOutlined/>,
                        },
                        {
                          href: '',
                          title: (
                            <>
                              <UserOutlined />
                              <span>Application List</span>
                            </>
                          ),
                        },
                        {
                          title: 'Application',
                        },
                      ]}
                      style={{padding: 12}}
                    />

                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
