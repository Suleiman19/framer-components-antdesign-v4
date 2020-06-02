import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Tag} from 'antd'
import { colors } from "../canvas"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function AntTag(props) {
    const { text, color, ...rest } = props

    return (
        <Tag {...rest} color = {
            props.color==="preset"?
        props.presetColor:props.customColor
    }
        >{props.text}</Tag>
    )
}

AntTag.defaultProps = {
    height: 24,
    width: 37,
    text: "Tag",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(AntTag, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Tag",
    },
    color: {
        type: ControlType.Enum,
        options: ["preset", "custom"],
        displaySegmentedControl: true,
    },
    presetColor: {
        type: ControlType.Enum,
        options: [
            "default",
            "magenta",
            "red",
            "volcano",
            "orange",
            "gold",
            "lime",
            "green",
            "cyan",
            "blue",
            "geekblue",
            "purple"
        ],
        hidden(props) {
            return props.color != "preset"
        }
    },
    customColor: {
        type: ControlType.Color,
        defaultValue: colors.PrimaryBlue,
        hidden(props) {
            return props.color != "custom"
        }
    },
    visible: {
        type: ControlType.Boolean,
    },  
    closable: {
        type: ControlType.Boolean,
    },

})
