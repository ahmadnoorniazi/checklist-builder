import React, { useState } from "react";
import { Modal, Button } from "antd";
import ProgressBar from "./ProgressBar";
import Card from "./Card";

const ChecklistModal = ({ checklist, onUpdateData, completionPercentage }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onUpdateStatus = (key, data) => {
    onUpdateData(key, data);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Checklist
      </Button>
      <Modal
        title="Checklist Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProgressBar percent={completionPercentage} />
        {checklist.map(({ status, label, key }, index) => (
          <Card
            key={key}
            defaultValue={status}
            label={label}
            itemNum={`1-${index + 1}`}
            onUpdateStatus={(value) =>
              onUpdateStatus(key, { label, status: value })
            }
          />
        ))}
      </Modal>
    </>
  );
};

export default ChecklistModal;
