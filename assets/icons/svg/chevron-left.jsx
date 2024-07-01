import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function ChevronLeft(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.25 37.5L18.75 25l12.5-12.5"
                stroke="#fff"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}