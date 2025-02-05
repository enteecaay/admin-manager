import React from "react";
import { Modal, Button } from "antd";
import { User } from "../../models/User";

interface ModalViewUserProps {
  user: User | null;
  visible: boolean;
  onClose: () => void;
}

const ModalViewUser: React.FC<ModalViewUserProps> = ({
  user,
  visible,
  onClose,
}) => {
  if (!user) return null;

  return (
    <Modal
      title="View User"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Create Date: {new Date(user.createDate).toLocaleDateString()}</p>
      <p>Update Date: {new Date(user.updateDate).toLocaleDateString()}</p>
    </Modal>
  );
};

export default ModalViewUser;
