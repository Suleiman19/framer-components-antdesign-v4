import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Radio } from "antd"
import { Icon } from "@ant-design/compatible"

addPropertyControls(AntRadioGroup, {
    items: {
        type: ControlType.Array,
        propertyControl: { type: ControlType.String },
    },
    defaultValue: { type: ControlType.String },
    style: {
        type: ControlType.Enum,
        defaultValue: 1,
        options: [1, 2],
        optionTitles: ["Default", "Button"],
        displaySegmentedControl: true,
    },
    size: {
        type: ControlType.Enum,
        defaultValue: "medium",
        options: ["small", "medium", "large"],
        optionTitles: ["Small", "Medium", "Large"],
        displaySegmentedControl: true,
        hidden(props) {
            return props.style === 1
        },
    },
    buttonStyle: {
        title: "Button Style",
        type: ControlType.Enum,
        options: ["solid", "radio"],
        optionTitles: ["Solid", "Radio"],
        displaySegmentedControl: true,
        hidden(props) {
            return props.style === 1
        },
    },
    icons: {
        type: ControlType.Array,
        propertyControl: { type: ControlType.String },
        hidden(props) {
            return props.style === 1
        },
    },
})

AntRadioGroup.defaultProps = {
    height: 32,
    width: "auto",
    defaultValue: null,
    items: ["one", "two"],
    style: 1,
    size: "medium",
    buttonStyle: "radio",
    icons: ["left", "right"],
    onChange: change => null,
}

export function AntRadioGroup(props) {
    const [value, setValue] = React.useState(null)

    const change = e => {
        props.onChange(e.target.value)
        setValue(e.target.value)
    }

    React.useEffect(() => {
        if (props.defaultValue != null) setValue(props.defaultValue)
    }, [props.defaultValue])

    return (
        <Radio.Group
            defaultValue={props.defaultValue}
            onChange={change}
            size={props.size}
            buttonStyle={props.buttonStyle}
            value={value}
        >
            {props.items.map(item => {
                return props.style == 1 ? (
                    <Radio value={item}>{item}</Radio>
                ) : (
                    <Radio.Button value={item}>{item}</Radio.Button>
                )
            })}
        </Radio.Group>
    )
}
