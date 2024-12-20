import React, { useState } from "react";
import { ProductCard } from "../meals/components";
import { Button, Card, Col, Drawer, Form, Input, Row, Select } from "antd";
import { useAuth } from "../../context/AuthContext";
import { NumericInput } from "./components";

function Orders() {
    const { themeMode } = useAuth();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState('');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };



    return <>
        <Card
            title="Meals"
            extra={
                <Button
                    color="primary"
                    variant="solid"
                    size="small"
                    onClick={showDrawer}
                >
                    Дабавить
                </Button>
            }
            style={{
                backgroundColor: themeMode === "dark" ? "#333" : "#fff",
                color: "white",
            }}
            color="white"
        >
            <Drawer
                title="Basic Drawer"
                onClose={onClose}
                open={open}
                width={560}
                style={{
                    backgroundColor: themeMode === "dark" ? "#333" : "#fff",
                    color: themeMode === "dark" ? "#fff" : "#000",
                }}
            >
                <Form layout="vertical">
                    <Form.Item
                        label="Имя Категории"
                        name="name"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Input placeholder="" color="" />
                    </Form.Item>


                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: "" }]}
                    >
                        <NumericInput style={{}} value={value} onChange={setValue} />
                    </Form.Item>


                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item
                        label="Категории"
                        name="category_name"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Select
                            defaultValue="lucy"
                            options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                    </Form.Item>
                </Form>
            </Drawer>
            <Row gutter={[12, 12]}>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={1}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={2}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
                <Col span={4}>
                    <ProductCard
                        title="Pizza"
                        price={29000}
                        description="katta kalbas, s sirom"
                        imageUrl="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
            </Row>
        </Card>
    </>
}

export default Orders;
