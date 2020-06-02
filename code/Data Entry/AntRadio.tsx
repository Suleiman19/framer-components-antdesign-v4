import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Radio } from "antd"

addPropertyControls(AntRadio, {
    label: { type: ControlType.String },
    checked: { type: ControlType.Boolean },
    disabled: { type: ControlType.Boolean },
})

AntRadio.defaultProps = {
    height: 24,
    width: "auto",
    checked: false,
    disabled: false,
    label: "Radio",
    onChange: (check: boolean) => null,
}

export function AntRadio(props) {
    const [checked, setChecked] = React.useState(false)

    const check = () => {
        props.onChange(!checked)
        setChecked(!checked)
    }

    React.useEffect(() => {
        if (checked != props.checked) {
            setChecked(props.checked)
        }
    }, [props.checked])

    return (
        <Radio checked={checked} disabled={props.disabled} onChange={check}>
            {props.label}
        </Radio>
    )
}
