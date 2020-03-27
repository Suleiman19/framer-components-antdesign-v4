import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Checkbox } from "antd"

addPropertyControls(AntCheckbox, {
    label: { type: ControlType.String },
    checked: { type: ControlType.Boolean },
    disabled: { type: ControlType.Boolean },
})

AntCheckbox.defaultProps = {
    height: 24,
    width: "auto",
    checked: false,
    disabled: false,
    label: "Checkbox",
    indeterminate: false,
    onChange: (check: boolean) => null,
}

export function AntCheckbox(props) {
    const [checked, setChecked] = React.useState(false)

    const check = () => {
        props.onChange(!checked)
        setChecked(!checked)
    }

    React.useEffect(() => {
        if (checked !== props.checked) {
            setChecked(props.checked)
        }
    }, [props.checked])

    return (
        <Checkbox
            checked={checked}
            disabled={props.disabled}
            onChange={check}
            indeterminate={props.indeterminate}
        >
            {props.label}
        </Checkbox>
    )
}
