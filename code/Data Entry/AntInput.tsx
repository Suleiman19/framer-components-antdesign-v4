import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Input as AntInput } from "antd"

addPropertyControls(Input, {
    placeholder: { type: ControlType.String },
    defaultValue: { type: ControlType.String },
    value: { type: ControlType.String },
    size: {
        type: ControlType.SegmentedEnum,
        options: ["default", "small", "large"],
    },
    disabled: { type: ControlType.Boolean },
})

const alertStyle: React.CSSProperties = {
    borderColor: "#FF0000"
}

const normalStyle: React.CSSProperties = {
    borderColor: "#rgba(0,0,0,0.15)"
}

Input.defaultProps = {
    height: 32,
    width: "auto",
    defaultValue: "",
    placeholder: "Type something",
    size: "default",
    disabled: false,
    onChange: (value: string) => null,  
    value: "",
    showAlert: false,
    // style: {normalStyle}
}


export function Input(props) {
    const { ...rest } = props

    const [value,setValue] = React.useState(null)

    const change = value  => {
        props.onChange(value.target.value)
        setValue(value.target.value)
    }

    React.useEffect(() => {
        if (value !== props.value) {
            setValue(props.value)
        }

    }, [props.value])


    // const controls = useAnimation()
    // controls.start(data.showNotif ? "visible" : "hidden")

    return (
        <AntInput
            defaultValue={props.defaultValue}
            value={value}
            onChange={change}
            placeholder={props.placeholder}
            size={props.size}
            disabled={props.disabled}
            style = {{
                borderColor: "#rgba(0,0,0,0.15)"
            }}
            // variants= {variants}
            // initial= "hidden"
            // animate= controls
        />
    )
}
