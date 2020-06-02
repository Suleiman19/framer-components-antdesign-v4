import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"

export function Grid(props) {
    const { text, tint, ...rest } = props

    return (
        <Stack
            {...rest}
            direction="horizontal"
            distribution="center"
            gap={props.gutter}
            background="transparent"
        >
            {displayGrid(props.columns)}
        </Stack>
    )
}

function displayGrid(columns) {
    const style = {
        background: "rgba(249, 18, 143,0.08)",
    }
    const cols = []
    for (var col = 0; col < columns; col++) {
        cols.push(
            <Frame height="100%" width="1fr" key={col} style={style}>
                {col + 1}
            </Frame>
        )
    }
    return cols
}

Grid.defaultProps = {
    height: "100%",
    width: 1200,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Grid, {
    columns: {
        type: ControlType.Enum,
        defaultValue: 24,
        options: [12, 24],
        displaySegmentedControl: true,
    },
    gutter: {
        type: ControlType.Enum,
        defaultValue: 16,
        options: [8, 16, 24, 32],
        optionTitles: ["xs", "sm", "md", "lg"],
        displaySegmentedControl: true,
    },
})
