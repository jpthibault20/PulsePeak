import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ProgressBar4(props) {
    return (
        <Svg
            width={266}
            height={16}
            viewBox="0 0 266 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 8H258"
                stroke="#F4F4F4"
                strokeWidth={15}
                strokeLinecap="round"
            />
            <Path
                d="M8 8H258"
                stroke="#03BADB"
                strokeWidth={15}
                strokeLinecap="round"
            />
        </Svg>
    )
}