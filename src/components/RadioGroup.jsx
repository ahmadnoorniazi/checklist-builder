import React from "react";
import { Radio } from "antd";
import "./radio.css";

const RadioGroup = ({ defaultValue, onUpdateValue }) => {
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
    onUpdateValue(e.target.value);
  };

  return (
    <Radio.Group className="radio-main" onChange={onChange} value={value}>
      <Radio className="radio-button-green" value={"pass"}>
        Pass
      </Radio>
      <Radio className="radio-button-red" value={"fail"}>
        Fail
      </Radio>
      <Radio className="radio-button-gray" value={"na"}>
        N/A
      </Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
