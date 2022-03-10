import React from "react";
import { Progress } from 'antd';

const ProgressBar = ({percent}) => {
    return (
        <Progress percent={percent} />
    )
}

export default ProgressBar;