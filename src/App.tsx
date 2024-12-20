import { useState } from "react";
import { AppLayout } from "./components";
import { ConfigProvider } from "antd";
import { useAuth } from "./context/AuthContext";

function App() {
    const { themeMode } = useAuth();
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: themeMode === "dark" ? "#444" : "#f5f5f5",
                            headerColor: themeMode === "dark" ? "#fff" : "#000",
                            colorBgContainer:
                                themeMode === "dark" ? "#333" : "#fff",
                            colorText: themeMode === "dark" ? "#fff" : "#000",
                            borderColor:
                                themeMode === "dark" ? "#555" : "#f0f0f0",
                        },
                        Card: {
                            colorBgContainer:
                                themeMode === "dark" ? "#333" : "#fff",
                            headerBg: themeMode === "dark" ? "#333" : "#fff",
                            colorText:   themeMode === "dark" ? "#fff" : "#000",
                            colorTextHeading:
                                themeMode === "dark" ? "#fff" : "#000",
                            colorTextDescription:
                                themeMode === "dark" ? "#fff" : "#000",
                                colorBorderSecondary:themeMode === "dark" ? "#444" : "#f5f5f5",
                        },
                        Breadcrumb: {
                            lastItemColor:
                                themeMode === "dark" ? "#fff" : "#000",
                            linkColor:
                                themeMode === "dark" ? "#f5f5f5" : "#000",
                            colorText: themeMode === "dark" ? "#fff" : "#000",
                            separatorMargin: 8,
                            separatorColor:
                                themeMode === "dark" ? "#fff" : "#000",
                        },
                        Modal: {
                            headerBg: themeMode === "dark" ? "#222" : "#fff",
                            colorTextHeading:
                                themeMode === "dark" ? "#222" : "#fff",
                            contentBg: themeMode === "dark" ? "#222" : "#fff",
                            titleColor: themeMode === "dark" ? "#fff" : "#000",
                            colorText: themeMode === "dark" ? "#fff" : "#000",
                        },
                        Form: {
                            labelColor: themeMode === "dark" ? "#fff" : "#000",
                        },
                        Input: {
                            colorBgContainer: themeMode === "dark" ? "#222" : "#fff",
                            colorText: themeMode === "dark" ? "#fff" : "#000",
                            colorTextPlaceholder:themeMode === "dark" ? "#5f5f5f" : "#000",
                        },
                        Select: {
                            selectorBg: themeMode === "dark" ? "#222" : "#fff",
                            optionSelectedBg: themeMode === "dark" ? "#222" : "#fff",
                            colorText: themeMode === "dark" ? "#fff" : "#000",
                            colorTextPlaceholder:themeMode === "dark" ? "#5f5f5f" : "#000",
                        }
                    },
                }}
            >
                <AppLayout />
            </ConfigProvider>
        </>
    );
}

export default App;
