import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import { Rate } from "antd";

addPropertyControls(AntRate, {
  disabled: { type: ControlType.Boolean },
  count: {
    type: ControlType.Number,
    min: 1,
    max: 10
  },
  value : {
    type: ControlType.Number,
    max: 10,
    min: 0
  }
});

AntRate.defaultProps = {
  height: 40,
  width: 136,
  disabled: false,
  value: 4,
  count: 5,
  onChange: (value: Number) => null
};

export function AntRate(props) {
  const { ...rest } = props;
  return <Rate {...rest} />;
}