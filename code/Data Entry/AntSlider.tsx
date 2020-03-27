import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Slider } from "antd"

AntSlider.defaultProps = {
    width: 200,
    height: 32,
    disabled: false,
    defaultValue: 40,
    range: false, // dual thumb mode
    rangeValue1: 20,
    rangeValue2:40,
    vertical: false,
    max: 100,
    min: 0,
    onChange: (value) => undefined,  
}

export function AntSlider(props) {
    const [value, setValue] = React.useState(undefined);
    const [rangeValues, setRangeValues] = React.useState([0,0]);

    const { ...rest } = props

    
    const onChange = (value) => {
        console.log("changed value: "+value)
        props.onChange(value)
        if(props.range) {
            setRangeValues(value)
        } else {
            setValue(value)
        }
    }
    
    React.useEffect(() => {
        if (value != props.defaultValue) {
            setValue(props.defaultValue)
        }
    }, [props.defaultValue])


    React.useEffect(() => {
        setRangeValues([props.rangeValue1, props.rangeValue2])
    }, [props.rangeValue1])

    return (
        <Slider
            {...rest}
        />
    )
}

addPropertyControls(AntSlider, {
    disabled: {
        type: ControlType.Boolean,
    },
    step: {
        type: ControlType.Number,
        defaultValue: 10,
        min: 0,
    },
    
    max: {
        type: ControlType.Number,
        displayStepper: true,
    },
    min: {
        type: ControlType.Number,
        displayStepper: true,
    },
    // range: {
    //     type: ControlType.Boolean,
    // },
    // rangeValue1: {
    //     type: ControlType.Number,
    //     defaultValue: 20,
    //     hidden(props) {
    //         return !props.range
    //     },
    // },
    // rangeValue2: {
    //     type: ControlType.Number,
    //     defaultValue: 40,        
    //     hidden(props) {
    //         return !props.range
    //     },
    // },
    defaultValue: {
        type: ControlType.Number,
        defaultValue: 40,
        hidden(props) {
            return props.range
        },  
    },
    vertical: {
        title: "Orientation",
        type: ControlType.Boolean,
        enabledTitle: "Vertical",
        disabledTitle: "Horizontal",
    },
})


// function getRange(value) {
//     return value.split(",",2).map(num=> +num) // only want 2 for a range
// }

// function parseValue(value) {
//     let formattedValue = undefined
//     if(value.includes(','))
//         formattedValue = value.split(",",2).map(num=> +num) // only want 2 for a range
//     else
//         formattedValue = +value
    
//     return formattedValue
// }
