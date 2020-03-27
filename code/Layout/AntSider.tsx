import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Layout, Menu } from "antd"
import { Icon } from "@ant-design/compatible"

const { Sider } = Layout

AntSider.defaultProps = {
    width: 200,
    height: 900,
    collapsible: false,
    onCollapse: (value: boolean) => false,
    onClick: e => null,
    menuItems: ["Home", "About"],
    menuIcons: ["home", "about"],
}

export function AntSider(props) {
    const [collapsed, setCollapsed] = React.useState(false)
    const [text, setText] = React.useState(null)

    const onClick = e => {
        props.onClick(e.key)
        setText(e.key)
    }

    const onCollapse = collapsed => {
        props.onCollapse(collapsed)
        setCollapsed(collapsed)
    }

    return (
        <Sider
            collapsible={props.collapsible}
            collapsed={collapsed}
            onCollapse={onCollapse}
            width={props.width}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
            }}
        >
            <div style={{ height: props.headerMargin }}>
                {" "}
                {collapsed ? props.headerCollapsed : props.header}
            </div>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={props.defaultSelectedKeys}
                mode="inline"
                theme="dark"
            >
                {renderMenuItems(props)}
            </Menu>
        </Sider>
    )
}

function renderMenuItems(props) {
    return props.menuItems.map((item, index) => (
        <Menu.Item key={item}>
            {props.useIcons ? (
                <Icon type={props.menuIcons[index]} theme={props.iconTheme} />
            ) : (
                ""
            )}
            <span>{item}</span>
        </Menu.Item>
    ))
}

addPropertyControls(AntSider, {
    collapsible: {
        type: ControlType.Boolean,
    },
    header: {
        type: ControlType.ComponentInstance,
    },
    headerCollapsed: {
        type: ControlType.ComponentInstance,
    },
    headerMargin: {
        type: ControlType.Number,
        defaultValue: 24,
        min: 0,
        max: 360,
        step: 1,
        unit: "px",
        displayStepper: true,
    },
    menuItems: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
    },
    defaultSelectedKeys: {
        type: ControlType.String,
        title: "Default Selected Menu",
        placeholder: "Menu Item",
    },
    useIcons: {
        type: ControlType.Boolean,
    },
    iconTheme: {
        type: ControlType.Enum,
        defaultValue: "filled",
        options: ["filled", "outlined", "twoTone"],
        hidden(props) {
            return props.useIcons === false
        },
    },
    menuIcons: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        hidden(props) {
            return props.useIcons === false
        },
    },
})
