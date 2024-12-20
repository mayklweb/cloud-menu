import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card, Tooltip } from "antd";

interface ProductCardProps {
    title: string;
    price: number;
    description: string;
    imageUrl?: string;
}

export default function ProductCard({
    title,
    price,
    description,
    imageUrl,
}: ProductCardProps) {
    return (
        <Card title={`${price}-stol, ${title}`}>
        <p>{description}</p>
        <p>{description}</p>
        <p>{description}</p>
    </Card>
    );
}
