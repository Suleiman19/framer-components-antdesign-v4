import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const { Search } = Input

addPropertyControls(AntInputSearch, {
    placeholder: { type: ControlType.String },
    value: { type: ControlType.String },
    size: {
        type: ControlType.SegmentedEnum,
        options: ["small", "default", "large"],
    },
    showIcon: {
        type: ControlType.Boolean,
        title: "Style",
        defaultValue: true,
        enabledTitle: "Icon",
        disabledTitle: "Label",
    },
    enterButton: {
        title: "Button Label",
        type: ControlType.String,
        hidden(props) {
            return props.showIcon
        },
    },
})

AntInputSearch.defaultProps = {
    placeholder: "Search Something",
    value: "",
    size: "default",
    height: 32,
    showIcon: true,
    onSearch: (value: string) => null,
    onChange: (value: string) => null,
}

export function AntInputSearch(props) {

    const onSearch = value => {
        // console.log("onSearch: "+ value)
    }

    const [value, setValue] = React.useState(null)

    const change = value => {
        props.onChange(value.target.value)
        setValue(value.target.value)
    }

    React.useEffect(() => {
        if (value !== props.value) {
            setValue(props.value)
        }
    }, [props.value])

    
    return (
        <Search
            placeholder={props.placeholder}
            enterButton ={props.showIcon?<SearchOutlined/>:props.enterButton}
            value={value}
            size={props.size}
            onSearch={onSearch}
            style={{ width: "100%" }}
            height={props.height}
            onChange={change}
        />
    )
}
