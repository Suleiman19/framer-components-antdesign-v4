import * as React from "react"
import { Frame, addPropertyControls, ControlType, useAnimation } from "framer"
import { Icon } from "@ant-design/compatible"
import { colors } from "../canvas"

export function AntIcon(props) {
    const onClick = () => {
        // TODO: Method works but unable to override
    }

    return (
        <Icon
            type={props.type}
            theme={props.theme}
            style={{
                color: props.iconTint,
                fontSize: props.size,
                textAlign: "center",
                padding: props.width / 2 - props.size / 2,
            }}
            twoToneColor={props.twoToneColor}
            onClick={onClick}
        />
    )
}

AntIcon.defaultProps = {
    size: 24,
    width: 24,
    height: 24,
    type: "home",
    theme: "outlined",
    iconTint: colors.TextSecondary,
    twoToneColor: colors.TextSecondary,
    // TODO: Not working
    onClick: () => null,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(AntIcon, {
    type: {
        type: ControlType.String,
        defaultValue: "home",
    },
    size: {
        type: ControlType.Enum,
        defaultValue: 16,
        options: [14, 16, 24, 32],
        optionTitles: ["14", "16", "24", "32"],
        displaySegmentedControl: true,
    },
    theme: {
        type: ControlType.Enum,
        options: ["filled", "outlined", "twoTone"],
    },
    iconTint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: colors.TextPrimary,
        hidden(props) {
            return props.theme == "twoTone"
        },
    },
    twoToneColor: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.Primary,
        hidden(props) {
            return props.theme != "twoTone"
        },
    },
})
