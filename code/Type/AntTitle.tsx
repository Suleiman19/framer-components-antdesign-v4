import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Typography } from "antd"

const { Title } = Typography

export function AntTitle(props) {
    const { ...rest } = props

    const [text,setText] = React.useState(null)

    const change = text  => {
        props.onChange(text.target.value)
        setText(text.target.value)
    }

    React.useEffect(() => {
        if (text !== props.text) {
            setText(props.text)
        }

    }, [props.text])

    return (
        <Title
            {...rest}
            type={props.type === "default" ? undefined : props.type}
            onChange={change}
        >
            {text}
        </Title>
    )
}

AntTitle.defaultProps = {
    height: 48,
    type: "default", // bold style
}

addPropertyControls(AntTitle, {
    text: {
        type: ControlType.String,
        defaultValue: "Title",
    },
    code: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    copyable: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    editable: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    ellipsis: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    level: {
        type: ControlType.Enum,
        options: [1, 2, 3, 4],
        defaultValue: 1,
        displaySegmentedControl: true,
    },
    mark: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    underline: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        type: ControlType.Enum,
        options: ["default", "secondary", "warning", "danger"],
    },
})
