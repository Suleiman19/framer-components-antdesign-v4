import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import { Tabs } from "antd";

const { TabPane } = Tabs;


AntTabs.defaultProps = {
    height: 46,
    onChange: change => null,
    tabs: ["tab 1", "tab 2"],
    defaultActiveKey: "tab 1",
}

export function AntTabs(props) {
    const {...rest} = props
    const [value, setValue] = React.useState(props.defaultActiveKey)

    const change = e => {
        props.onChange(e.target.value)
        setValue(e.target.value)
    }

    React.useEffect(() => {
        if (props.defaultActiveKey != null) setValue(props.defaultActiveKey)
    }, [props.defaultActiveKey])

    return(
  <Tabs  
    {...rest}
    defaultActiveKey={props.defaultActiveKey}
        activeKey = {value}
        onChange={change}
    >
    {
    props.tabs.map(item => (
        <TabPane tab={`${item}`} key={item}>
          {/* Content of tab {item} */}
        </TabPane>
      ))
    }

  </Tabs>
  )
}

addPropertyControls(AntTabs, {
    activeKey: { type: ControlType.String },
    animated: {type: ControlType.Boolean,
    defaultValue: true,
    hidden(props) {
        return props.tabPosition !== "top"|| props.tabPosition !== "bottom"
    }},
    defaultActiveKey: { type: ControlType.String },
    hideAdd: {
        type: ControlType.Boolean,
        defaultValue: false,
        hidden(props) { 
            return props.type != "editable-card"
        }
    },
    size: {
        type: ControlType.Enum,
        options: ["large", "default", "small"],
        defaultValue: "default",
        displaySegmentedControl: true,
    },
    tabBarGutter: {
        title: "Gutter",
        type: ControlType.Number,
        defaultValue: 55,
    },
    tabPosition: {
        type: ControlType.Enum,
        options: ["top", "right", "bottom", "left"],
        defaultValue: "top",
    },
    type: {
        type: ControlType.Enum,
        options: ["line", "card", "editable-card"],
        defaultValue: "line",
    },
    tabs: {
        type: ControlType.Array,
        propertyControl: { type: ControlType.String },
    },
    keyboard: {
        type: ControlType.Boolean,
        defaultValue: true,
    }
})