import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Icon } from "@ant-design/compatible"
import { Button } from "antd"

addPropertyControls(AntButton, {
    label: { type: ControlType.String },
    // icon: { type: ControlType.String },
    type: {
        type: ControlType.Enum,
        options: ["default", "primary", "danger", "link", "dashed"],
    },
    size: {
        type: ControlType.SegmentedEnum,
        options: ["default", "small", "large"],
    },
    loading: { type: ControlType.Boolean },
    block: { type: ControlType.Boolean },
    shape: {
        type: ControlType.SegmentedEnum,
        options: ["default", "circle", "round"],
    },
    disabled: { type: ControlType.Boolean },
    ghost: { type: ControlType.Boolean },
})

AntButton.defaultProps = {
    height: 32,
    width: 80,
    label: "Button",
    type: "default",
    size: "default",
    loading: false,
    block: false, // dictated width by bounds rather than label lenght
    shape: "default",
    disabled: false,
    ghost: false,
}

export function AntButton(props) {
    const { ...rest } = props

    return (
        <Button animate={null} {...rest}>
            {props.label}
        </Button>
    )
}
