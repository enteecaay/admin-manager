import React, { useEffect, useState } from "react";
import DeletePost from "../../components/DeletePost";
import CreatePost from "../../components/CreatePost";
import { Button, Modal, Table } from "antd";
import ModalViewPost from "../../components/ModalViewPost";
import { Post } from "../../models/Post";
import { deletePost, getPostsByUserId } from "../../service/postApi";

const PostPage: React.FC = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreateOrUpdateModalVisible, setIsCreateOrUpdateModalVisible] =
    useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false); // New state variable

  let userId: string = localStorage.getItem("userId") || "1";
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response: Post[] = await getPostsByUserId(userId);
        setPostList(response);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, [userId, refreshTrigger]); // Add refreshTrigger to dependencies

  const handleViewPost = (post: Post) => {
    setSelectedPost(post);
    setIsViewModalVisible(true);
  };

  const handleUpdatePost = (post: Post) => {
    setSelectedPost(post);
    setIsUpdateMode(true);
    setIsCreateOrUpdateModalVisible(true);
  };

  const handleCloseCreateOrUpdateModal = () => {
    setIsCreateOrUpdateModalVisible(false);
    setSelectedPost(null);
    setIsUpdateMode(false);
  };

  const handleCloseViewModal = () => {
    setIsViewModalVisible(false);
    setSelectedPost(null);
  };

  const handleDeletePost = async (post: Post) => {
    try {
      await deletePost(post.id, userId); // Ensure this function deletes the post
      setRefreshTrigger(!refreshTrigger); // Trigger refresh
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedPost(null);
  };

  const showDeleteConfirm = (post: Post) => {
    Modal.confirm({
      title: "Confirm Deletion",
      content: "Are you sure you want to delete this post?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => handleDeletePost(post),
    });
  };

  const handleRefreshPosts = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  const modalStyle = {
    width: "100%",
    height: "100%",
    maxHeight: "90vh",
    display: "flex",
    justifyContent: "center",
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) => (
        <div
          style={{
            width: "200px",
            height: "calc(80vh/11)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          dangerouslySetInnerHTML={{
            __html: description.replace(/<img[^>]*>/g, ""),
          }}
        />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => (status ? "Active" : "Inactive"),
    },
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
      render: (date: Date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Update Date",
      dataIndex: "updateDate",
      key: "updateDate",
      render: (date: Date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Post) => (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button type="primary" onClick={() => handleViewPost(record)}>
            View
          </Button>
          <Button type="primary" onClick={() => handleUpdatePost(record)}>
            Update
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => showDeleteConfirm(record)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="post-list">
      <Button
        type="primary"
        onClick={() => setIsCreateOrUpdateModalVisible(true)}
      >
        Add Post
      </Button>
      <Table<Post>
        columns={columns}
        dataSource={postList.map((post) => ({ ...post, key: post.id }))}
        pagination={{ pageSize: 10 }}
      />
      <ModalViewPost
        post={selectedPost}
        visible={isViewModalVisible}
        onClose={handleCloseViewModal}
      />
      <Modal
        title={isUpdateMode ? "Update Post" : "Create a New Post"}
        open={isCreateOrUpdateModalVisible}
        onCancel={handleCloseCreateOrUpdateModal}
        footer={null}
        style={modalStyle}
        styles={{
          body: { height: "70vh", width: "60vw", overflow: "auto" },
        }} // Adjust height to fit the viewport
      >
        <CreatePost
          post={selectedPost}
          onClose={handleCloseCreateOrUpdateModal}
          isUpdateMode={isUpdateMode}
          refreshPosts={() => setRefreshTrigger(!refreshTrigger)}
        />
      </Modal>
      <DeletePost
        post={selectedPost}
        onDelete={handleDeletePost}
        isVisible={isDeleteModalVisible}
        onClose={handleCloseDeleteModal}
      />
    </div>
  );
};

export default PostPage;
