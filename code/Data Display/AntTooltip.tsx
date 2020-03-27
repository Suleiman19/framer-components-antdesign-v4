import { addPropertyControls, ControlType } from "framer"
import { Tooltip } from 'antd';
import * as React from "react";


addPropertyControls(AntTooltip, {
    title: { type: ControlType.String },
    ui: {
        title: "UI",
        type: ControlType.ComponentInstance,
    }
})

AntTooltip.defaultProps = {
    title: "This is a Tooltip"
}

export function AntTooltip(props) {
    return (
        <Tooltip title={props.title}>
          {props.ui}
        </Tooltip>
    )
}