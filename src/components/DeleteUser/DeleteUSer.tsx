import React from "react";
import { Modal } from "antd";
import { User } from "../../models/User";

interface DeleteUserProps {
  user?: User | null;
  onDelete: (user: User) => void;
  isVisible: boolean;
  onClose: () => void;
}

const DeleteUser: React.FC<DeleteUserProps> = ({
  user,
  onDelete,
  isVisible,
  onClose,
}) => {
  const handleDelete = async () => {
    if (user) {
      await onDelete(user); // Ensure this function deletes the user
      onClose();
    }
  };

  return (
    <Modal
      title="Delete User"
      open={isVisible}
      onOk={handleDelete}
      onCancel={onClose}
      okText="Delete"
      cancelText="Cancel"
    >
      <p>Are you sure you want to delete this user?</p>
    </Modal>
  );
};

export default DeleteUser;
