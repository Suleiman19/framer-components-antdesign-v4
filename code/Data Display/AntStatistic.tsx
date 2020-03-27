import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import { Statistic } from "antd";


AntStatistic.defaultProps = {
    title: "Statistic Title",
    value: "Description",
    height: 64,
    valueSize: 24,
}

export function AntStatistic(props) {
    const {...rest} = props
    return(<Statistic {...rest} valueStyle={{fontSize: props.valueSize}}/>)
}


addPropertyControls(AntStatistic, {
    title: {
        type: ControlType.String,
    },
    value: {
        type: ControlType.String,
    },
    valueSize: {
        type: ControlType.Number,
        min: 12,
        max: 80,
    }
})