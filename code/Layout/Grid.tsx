import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"
import { Row, Col } from "antd"
import "antd/dist/antd.css"

// Open Preview: Command + P
// Learn more: https://ant.design/components/grid/

// const GRIDTYPE = {
//     default: "Default", // 100%
//     oneFourth: "One Fourth", // 4 parts, 25% each
//     oneThird: "One Third", // 3 parts, 33.33% each
//     half: "Half", // 2 parts, 50% each
//     threeFourth: "Three Fourth", // 2 parts, 66.66% and 33.33% respectively
// }

const inheritHeight = { height: "inherit" }

export function Grid(props) {
    const { text, tint, ...rest } = props

    return (
        <div style={{ width: props.width, height: props.height }}>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={inheritHeight}
            >
                {displayGrid()}
            </Row>
        </div>
    )
}

function displayGrid() {
    const style = {
        background: "rgba(0, 146, 255,0.2)",
        color: "rgba(0,0,0,0.4)",
        height: "100%",
    }

    const cols = []
    for (var col = 0; col < 24; col++) {
        cols.push(
            <Col className="gutter-row" span={1}>
                <div style={style}>col {col + 1}</div>
            </Col>
        )
    }
    return cols
}

Grid.defaultProps = {
    height: 900,
    width: 1440,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Grid, {
    // grid: {
    //     type: ControlType.Enum,
    //     defaultValue: GRIDTYPE.default,
    //     options: [
    //         GRIDTYPE.default,
    //         GRIDTYPE.oneFourth,
    //         GRIDTYPE.oneThird,
    //         GRIDTYPE.half,
    //         GRIDTYPE.threeFourth,
    //     ],
    // },
})
