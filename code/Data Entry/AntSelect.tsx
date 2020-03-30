import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Select } from "antd"

const { Option } = Select

AntSelect.defaultProps = {
    width: 100,
    height: 32,
    placeholder: "Select a format",
    size: "default",
    disabled: false,
    onChange: (value: string) => null,
    items: ["One", "Two"],
    value: "One",
}

export function AntSelect(props) {
    const {...rest} = props
    const [value, setValue] = React.useState(undefined)

    const onChange = value => {
        props.onChange(value)
        setValue(value)
    }

    React.useEffect(() => {
        if (value !== props.value) {
            setValue(props.value)
        }
    }, [props.value])

    return (
        <Select
            {...rest}
            style={{ width: "100%" }}
            value={props.value.length > 0 ? value : undefined}
            onChange={onChange}
            children={props.items.map(item => {
                return <Option key={item}>{item}</Option>
            })}
        />
    )
}

addPropertyControls(AntSelect, {
    placeholder: { type: ControlType.String },
    size: {
        type: ControlType.SegmentedEnum,
        options: ["default", "small", "large"],
    },
    disabled: { type: ControlType.Boolean },
    items: {
        type: ControlType.Array,
        propertyControl: { type: ControlType.String },
    },
    value: {
        type: ControlType.String,
    },
})
