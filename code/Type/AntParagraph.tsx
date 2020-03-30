import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Typography } from "antd"

const { Paragraph } = Typography

export function AntParagraph(props) {
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
        <Paragraph
            {...rest}
            type={props.type === "default" ? undefined : props.type}
            onChange={change}
        >
            {text}
        </Paragraph>
    )
}

AntParagraph.defaultProps = {
    height: 40,
    type: "default", // bold style
    onChange: (value: string) => null,  
}

addPropertyControls(AntParagraph, {
    text: {
        type: ControlType.String,
        defaultValue: "Text",
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
    mark: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    underline: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    strong: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        type: ControlType.Enum,
        options: ["default", "secondary", "warning", "danger"],
    },
})
