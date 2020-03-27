import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Switch } from "antd"

addPropertyControls(AntSwitch, {
  checked: { type: ControlType.Boolean },
  disabled: { type: ControlType.Boolean }
});

    AntSwitch.defaultProps = {
    height: 24,
    width: 44,
    defaultChecked: false,
    checked: false,
    disabled: false,
    onChange: (check: boolean) => null
    };

export function AntSwitch(props) {
  const [checked, setChecked] = React.useState(false);

  const check = () => {
    props.onChange(!checked);
    setChecked(!checked);
  };

  React.useEffect(() => {
    if (checked != props.checked) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  return (
    <Switch
      defaultChecked={props.defaultChecked}
      checked={checked}
      disabled={props.disabled}
      onChange={check}
    />
  );
}
