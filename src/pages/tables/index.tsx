import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    Drawer,
    Form,
    Input,
    Modal,
    Row,
    Space,
    Switch,
    Table,
    Typography,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useLoad, usePatchRequest, usePostRequest } from "../../hooks/request";
import {
    categoriesDelete,
    categoriesList,
    categoriesPatch,
    categoriesPost,
} from "../../constants/urls";
import { slugify } from "../../utils/helpers";
import useDeleteModal from "../../hooks/useDeleteModal";
import { Tag } from "antd";
import type { TableProps } from "antd";
import { useAuth } from "../../context/AuthContext";

interface Category {
    id: number;
    title: string;
    slug: string;
    image?: string;
    isRecommended: boolean;
}

interface DataType {
    key: string;
    name: string;
    qty: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: "1",
        name: "1",
        qty: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "2",
        qty: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "3",
        qty: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];


function Tables() {
  const [form] = Form.useForm();
  const title = Form.useWatch("title", form);
  const postRequest = usePostRequest({ url: categoriesPost });
  const patchRequest = usePatchRequest();
  const [isUpdate, setIsUpdate] = useState<number | null>(null);
  const deleteModal = useDeleteModal();
  const [open, setOpen] = useState(false);
  const { themeMode } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
      setIsModalOpen(true);
  };

  const handleOk = () => {
      setIsModalOpen(false);
  };

  const columns: TableProps<DataType>["columns"] = [
      {
          title: "ID",
          dataIndex: "key",
          key: "key",
          render: (id) => <span>#{id}</span>,
      },
      {
          title: "Stol Number",
          dataIndex: "name",
          key: "name",
          render: (name) => <span>{name}-stol</span>,
      },
      {
          title: "Floor",
          dataIndex: "qty",
          key: "age",
          render: (qty) => <span>{qty} etaj</span>,
      },
      {
          title: "Action",
          key: "action",
          render: (item) => (
              <Space size="middle">
                  <Button color="primary" variant="solid">
                      <EditOutlined />
                  </Button>
                  <Button color="danger" variant="solid">
                      <DeleteOutlined />
                  </Button>
              </Space>
          ),
      },
  ];

  const {
      response: categories,
      loading,
      request: reload,
  } = useLoad<Category[]>({ url: categoriesList });

  const handleRecommended = async (isRecommended: boolean, id: number) => {
      const { success } = await patchRequest.request({
          url: categoriesPatch(id),
          data: { isRecommended },
      });
      if (success) {
          reload();
      }
  };

  const handleEdit = (item: Category) => {
      form.setFieldsValue(item);
      setIsUpdate(item.id);
  };

  const handleFinish = async (data: Category) => {
      const { success } = isUpdate
          ? await patchRequest.request({
              url: categoriesPatch(isUpdate),
              data,
          })
          : await postRequest.request({ data });
      if (success) {
          reload();
          form.resetFields();
          setIsUpdate(null);
      }
  };

  const handleCancel = () => {
      setIsModalOpen(false);
      setIsUpdate(null);
      form.resetFields();
  };

  useEffect(() => {
      if (title && title.length) {
          form.setFieldValue("slug", slugify(title));
      }
  }, [title]);

  return (
    <Card
      title="Категория"
      extra={
        <Button
          color="primary"
          variant="solid"
          size="small"
          onClick={showModal}
        >
          Дабавить
        </Button>
      }
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Table<DataType>
            columns={columns}
            dataSource={data}
            bordered
            size="small"
          />
        </Col>
      </Row>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            size="small"
            color="default"
            variant="outlined"
            onClick={handleCancel}
          // style={{color: themeMode=== "dark" ? "black" : "black"}}
          >
            Отмена
          </Button>,
          <Button
            key="submit"
            size="small"
            color="primary"
            variant="solid"
            onClick={handleOk}
          >
            Дабавить
          </Button>,
        ]}
      >
        <Form layout="vertical">

          <Form.Item
            label="Имя Категории"
            name="title"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  )
}

export default Tables
