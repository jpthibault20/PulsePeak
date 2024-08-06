import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const TextMe = (props) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.601 11.8V8.2m0-3.6v.09m-.314 10.501L5.278 20.2v-5.009H3.4a2.4 2.4 0 01-2.4-2.4V3.4A2.4 2.4 0 013.4 1h14.4a2.4 2.4 0 012.4 2.4v9.391a2.4 2.4 0 01-2.4 2.4h-7.513z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}