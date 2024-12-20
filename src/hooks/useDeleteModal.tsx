import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { useDeleteRequest } from './request';

const { confirm } = Modal;

type ReloadFunction = () => void;

function useDeleteModal() {
  const deleteRequest = useDeleteRequest();

  return async (deleteUrl: string, reload: ReloadFunction) => (
    confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await deleteRequest.request({ url: deleteUrl });
        reload();
      },
      onCancel() {
        // Handle cancel action if needed
      },
    })
  );
}

export default useDeleteModal;
