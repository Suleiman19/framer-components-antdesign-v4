import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Card, Button } from "antd"
import { Icon } from "@ant-design/compatible"
import 'antd/dist/antd.css';

// https://ant.design/components/card/#components-card-demo-basic

AntCard.defaultProps = {
    width: 300,
    height: "100%",
    title: "Card Title",
    moreLabel: "More",
}

export function AntCard(props) {
    const { ...rest } = props

    const link = <a href="#">{props.moreLabel}</a>
    const icon = props.buttonIcon !== "" ? <Icon type={props.type} /> : ""
    const button = (
        <Button type={props.buttonType} size={props.buttonSize} icon={icon}>
            {props.moreLabel}
        </Button>
    )

    const style = {
        width: props.width, height: props.autoHeight? "auto":props.height, overflow: "hidden" 
    }

    // fallback to default image when one isn't provided
    // const defaultImgUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    // const cover=<img alt="example" src={props.coverImage!==""?props.coverImage:defaultImgUrl} />    
    const cover = props.coverImage!==""?<img alt="card cover image" src={props.coverImage}/>:undefined

    const extra = props.moreType === "button" ? button : link

    return (
    <Card
        {...rest}
        title={props.showHeader?props.title: undefined}
        extra={props.showHeader?extra: undefined}
        style={style}
        cover={cover}
    >
        {/* {props.contentType==="text"?props.textContent:props.customContent} */}
        {/* {getContent(props)} */}
        {props.textContent}
    </Card>
    )
}

function getContent(props) {
    if(props.contentType === "text") {
        return props.textContent
    } else {
        return <div className="ant-card-body">{props.children}</div>
    }
}

addPropertyControls(AntCard, {
    showHeader: {
        title: "Header",
        type: ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    title: {
        type: ControlType.String,
        hidden(props) {
            return !props.showHeader
        }
    },
    moreLabel: {
        type: ControlType.String,
        hidden(props) {
            return !props.showHeader
        }
    },
    moreType: {
        type: ControlType.Enum,
        defaultValue: "link",
        options: ["button", "link"],
        displaySegmentedControl: true,
        hidden(props) {
            return !props.showHeader
        }
    },
    buttonType: {
        type: ControlType.Enum,
        defaultValue: "default",
        options: ["primary", "default"],
        displaySegmentedControl: true,
        hidden(props) {
            return props.moreType !== "button"
        },
    },
    buttonSize: {
        type: ControlType.Enum,
        defaultValue: "middle",
        options: ["large", "middle", "small"],
        displaySegmentedControl: true,
        hidden(props) {
            return props.moreType !== "button"
        },
    },
    type: {
        title: "Button Icon",
        type: ControlType.String,
        defaultValue: "info-circle",
        hidden(props) {
            return props.moreType !== "button"
        },
    },
    autoHeight: {
        title: "Height",
        type: ControlType.Boolean,
        defaultValue: false,
        enabledTitle: "Auto",
        disabledTitle: "Resizable",
    },
    contentType: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        defaultValue: "text",
        options: ["text","custom"],
        hidden(props){
            return true
        }
    },
    textContent: {
        type: ControlType.String,
        // hidden(props) {
        //     return props.contentType !== "text"
        // }
    },
    children: {
        type: ControlType.ComponentInstance,
        hidden(props) {
            // return props.contentType !== "custom"
            return true
        }
    },
    hoverable: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
    coverImage: {
        type: ControlType.File,
        allowedFileTypes: ["png", "jpg", "jpeg"],
    }
})
