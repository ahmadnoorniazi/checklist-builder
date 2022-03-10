import React from "react";
import { Card, Image } from "antd";
import RadioGroup from "./RadioGroup";
import "./card.css";

const ItemCard = ({ itemNum, label, defaultValue, onUpdateStatus }) => {
  return (
    <div className="card-box">
      <Card width="100%">
        <div className="main">
          <p className="item-num">{itemNum}</p>
          <p>{label}</p>
        </div>
        <div style={{ height: "300px" }}>
          <Image
            width={"100%"}
            height="100%"
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </div>
        <div className="options-section">
          <RadioGroup
            defaultValue={defaultValue}
            label={label}
            onUpdateValue={onUpdateStatus}
          />
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
