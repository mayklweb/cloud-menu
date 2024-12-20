import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card, Tooltip } from "antd";

interface ProductCardProps {
    title: string;
    price: number;
    description: string;
    imageUrl?: string;
}
const { Meta } = Card;

export default function ProductCard({
    title,
    price,
    description,
    imageUrl,
}: ProductCardProps) {
    return (
        <Card
            hoverable
            style={{ width: 280 }}
            cover={<img alt={imageUrl} src={imageUrl} />}
            actions={[
                <EditOutlined key="edit" title="Edit" />,
                <DeleteOutlined key="delete" title="Delete" />,
            ]}
        >
            <Meta title={title} description={description} />
        </Card>
    );
}
