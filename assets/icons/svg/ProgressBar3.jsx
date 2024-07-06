import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ProgressBar3(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
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
                d="M8 8H195.5"
                stroke="url(#paint0_linear_91_221)"
                strokeWidth={15}
                strokeLinecap="round"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_91_221"
                    x1={8}
                    y1={8.5}
                    x2={195.5}
                    y2={8.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#03BADB" />
                    <Stop offset={0.95} stopColor="#03BADB" />
                    <Stop offset={1} stopColor="#F4F4F4" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}