import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Table } from 'antd'

addPropertyControls(AntTable, {
    loading: {
        type: ControlType.Boolean
      },
      size: {
        type: ControlType.Enum,
        defaultValue: "middle",
        options: ['small', 'default', 'middle'],
        optionTitles: ["Small", "Default", "Middle"],
        displaySegmentedControl: true,
    },

    bordered: {
        type: ControlType.Boolean
      },
    scrollX: {
        title: "Scroll X",
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        unit: "px",
        displayStepper: false,
      }
})

AntTable.defaultProps = {
    width: 300,
    height: 200,
    loading: false,
    size: 'default',
    bordered: false,
    dataSource: null,
    columns: null,
    scroll: { x: 1300 },
}

export function AntTable(props) {
    return (<Table 
        {...props}
         />)
}