import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Avatar, Badge } from "antd"
import { UserOutlined } from "@ant-design/icons"

addPropertyControls(AntAvatar, {
    shape: {
        type: ControlType.Enum,
        defaultValue: "circle",
        options: ["circle", "square"],
    },
    size: {
        type: ControlType.Enum,
        defaultValue: "default",
        options: ["number", "large", "small", "default"],
    },
    number: {
        type: ControlType.Number,
        title: "Size Number",
        min: 0,
        defaultValue: 32,
        displayStepper: false,
        hidden(props) {
            return props.size !== "number"
        },
    },
    showBadge: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    badgeCount: {
        type: ControlType.Number,
        min: 1,
        displayStepper: false,
        hidden(props) {
            return !props.showBadge
        },
    },
    src: {
        type: ControlType.File,
        allowedFileTypes: ["jpg", "jpeg", "png"],
    },
})

AntAvatar.defaultProps = {
    height: 32,
    width: 32,
    shape: "square",
    icon: <UserOutlined />,
}

export function AntAvatar(props) {
    const { ...rest } = props

    const avatar = (
        <Avatar
            {...rest}
            size={props.size === "number" ? props.number : props.size}
        />
    )

    if (props.showBadge) return <Badge count={props.badgeCount}>{avatar}</Badge>
    else return avatar
}
